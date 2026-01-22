import { useState, useEffect } from "react";
import {
  Camera,
  Mail,
  User,
  Phone,
  MapPin,
  Globe,
  FileText,
  Image
} from "lucide-react";
import api from "../../api/axios";

const Profile = () => {
  const userId = "USER_ID_HERE";

  const [loading, setLoading] = useState(true);

  // 🔹 Read-only user info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // 🔹 Profile data (URL only)
  const [formData, setFormData] = useState({
    profile_image: "",
    banner_image: "",
    bio: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
  });

  // 🔹 Image preview
  const [preview, setPreview] = useState({
    profile_image: "",
    banner_image: ""
  });

  /* 🔹 Fetch profile */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/user/${userId}`);
        const user = res.data;

        setUserInfo({
          name: user.username,
          email: user.email,
          phone: user.mobile
        });

        setFormData({
          profile_image: user.profile?.profile_image || "",
          banner_image: user.profile?.banner_image || "",
          bio: user.profile?.bio || "",
          address: user.profile?.address || "",
          city: user.profile?.city || "",
          state: user.profile?.state || "",
          country: user.profile?.country || "",
          pincode: user.profile?.pincode || ""
        });

        setPreview({
          profile_image: user.profile?.profile_image || "",
          banner_image: user.profile?.banner_image || ""
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  /* 🔹 Upload image to Cloudinary */
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("image", file); // 👈 KEY MUST MATCH multer

    const res = await api.post(
      "/upload/single-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    if (!res.data.success) {
      throw new Error("Image upload failed");
    }

    return res.data.data.secure_url; // 👈 Cloudinary URL
  };

  /* 🔹 Handle file select */
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    try {
      // 🔹 Preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(prev => ({
        ...prev,
        [name]: previewUrl
      }));

      // 🔹 Upload to Cloudinary
      const imageUrl = await uploadImageToCloudinary(file);

      setFormData(prev => ({
        ...prev,
        [name]: imageUrl
      }));

    } catch (err) {
      console.error(err);
      alert("Image upload failed ❌");
    }
  };

  /* 🔹 Handle text input */
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  /* 🔹 Submit profile (URL only) */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/user/update-profile/${userId}`,
        formData
      );

      alert("Profile updated successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Profile update failed ❌");
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading profile...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-white text-gray-800">

      {/* 🔹 BANNER IMAGE */}
      <div className="relative h-56 bg-gray-200">
        <img
          src={preview.banner_image || "https://via.placeholder.com/1200x300"}
          className="w-full h-full object-cover"
          alt="banner"
        />

        <label className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow cursor-pointer">
          <Image size={18} className="text-emerald-600" />
          <input
            type="file"
            accept="image/*"
            name="banner_image"
            hidden
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="p-6 space-y-8 max-w-4xl mx-auto">

        <h1 className="text-2xl font-semibold text-emerald-600">
          Profile Settings
        </h1>

        {/* 🔹 PROFILE IMAGE */}
        <div className="flex gap-6 items-center border-b pb-6">
          <div className="relative w-28 h-28">
            <img
              src={preview.profile_image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              className="w-28 h-28 rounded-full object-cover border"
              alt="avatar"
            />

            <label className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow cursor-pointer">
              <Camera size={16} className="text-emerald-600" />
              <input
                type="file"
                accept="image/*"
                name="profile_image"
                hidden
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* 🔹 READ ONLY INFO */}
        <Input label="Name" icon={<User size={16} />} value={userInfo.name} disabled />
        <Input label="Email" icon={<Mail size={16} />} value={userInfo.email} disabled />
        <Input label="Phone" icon={<Phone size={16} />} value={userInfo.phone} disabled />

        {/* 🔹 BIO */}
        <Textarea label="Bio" icon={<FileText size={16} />} name="bio" value={formData.bio} onChange={handleChange} />

        {/* 🔹 ADDRESS */}
        <Textarea label="Address" icon={<MapPin size={16} />} name="address" value={formData.address} onChange={handleChange} />

        {/* 🔹 LOCATION */}
        <div className="grid grid-cols-2 gap-6">
          <Input label="City" name="city" icon={<MapPin size={16} />} value={formData.city} onChange={handleChange} />
          <Input label="State" name="state" icon={<MapPin size={16} />} value={formData.state} onChange={handleChange} />
          <Input label="Country" name="country" icon={<Globe size={16} />} value={formData.country} onChange={handleChange} />
          <Input label="Pincode" name="pincode" icon={<MapPin size={16} />} value={formData.pincode} onChange={handleChange} />
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white px-10 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};

/* 🔹 Reusable Components */
const Input = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 text-gray-700 mb-1">
      {icon} {label}
    </label>
    <input {...props} className="border p-3 rounded-lg w-full bg-gray-50" />
  </div>
);

const Textarea = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 text-gray-700 mb-1">
      {icon} {label}
    </label>
    <textarea {...props} rows="3" className="border p-3 rounded-lg w-full" />
  </div>
);

export default Profile;
