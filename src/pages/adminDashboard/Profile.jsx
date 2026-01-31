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
import { useSelector } from "react-redux";
import api from "../../api/axios";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const userId = user?._id;

  const [loading, setLoading] = useState(true);

  // Read-only info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Editable profile data (PROFILE OBJECT)
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

  // Image preview
  const [preview, setPreview] = useState({
    profile_image: "",
    banner_image: ""
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/user/getUserById/${userId}`);
        console.log(res)
        console.log(res.data)
        const data = res.data.data;

        setUserInfo({
          name: data.username,
          email: data.email,
          phone: data.mobile
        });

        setFormData({
          profile_image: data?.profile_image || "",
          banner_image: data?.banner_image || "",
          bio: data?.bio || "",
          address: data?.address || "",
          city: data?.city || "",
          state: data?.state || "",
          country: data?.country || "",
          pincode: data?.pincode || ""
        });

        setPreview({
          profile_image: data?.profile_image || "",
          banner_image: data?.banner_image || ""
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (userId) fetchProfile();
  }, [userId]);

  /* ================= IMAGE UPLOAD ================= */
  const uploadImageToCloudinary = async (file) => {
    const fd = new FormData();
    fd.append("image", file);

    const res = await api.post("/upload/single-image", fd, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    return res.data.data.url;
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview((prev) => ({ ...prev, [name]: previewUrl }));

    try {
      const imageUrl = await uploadImageToCloudinary(file);
      setFormData((prev) => ({ ...prev, [name]: imageUrl }));
    } catch (err) {
      alert("Image upload failed ❌");
    }
  };

  /* ================= INPUT HANDLERS ================= */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  /* ================= SAVE PROFILE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/user/update-profile/${userId}`, formData);
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
    <form onSubmit={handleSubmit} className="min-h-screen bg-white">

      {/* BANNER */}
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
            name="banner_image"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">

        <h1 className="text-2xl font-semibold text-emerald-600">
          Profile Settings
        </h1>

        {/* PROFILE IMAGE */}
        <div className="flex items-center gap-6 border-b pb-6">
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
                name="profile_image"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* READ ONLY */}
        <Input label="Name" icon={<User size={16} />} value={userInfo.name} disabled />
        <Input label="Email" icon={<Mail size={16} />} value={userInfo.email} disabled />
        <Input label="Phone" icon={<Phone size={16} />} value={userInfo.phone} disabled />

        {/* EDITABLE */}
        <Textarea label="Bio" icon={<FileText size={16} />} name="bio" value={formData.bio} onChange={handleChange} />
        <Textarea label="Address" icon={<MapPin size={16} />} name="address" value={formData.address} onChange={handleChange} />

        <div className="grid grid-cols-2 gap-6">
          <Input label="City" name="city" icon={<MapPin size={16} />} value={formData.city} onChange={handleChange} />
          <Input label="State" name="state" icon={<MapPin size={16} />} value={formData.state} onChange={handleChange} />
          <Input label="Country" name="country" icon={<Globe size={16} />} value={formData.country} onChange={handleChange} />
          <Input label="Pincode" name="pincode" icon={<MapPin size={16} />} value={formData.pincode} onChange={handleChange} />
        </div>

        <button className="bg-emerald-600 text-white px-10 py-3 rounded-xl hover:bg-emerald-700">
          Save Profile
        </button>
      </div>
    </form>
  );
};

/* ================= REUSABLE INPUTS ================= */

const Input = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-1 text-gray-700">
      {icon} {label}
    </label>
    <input {...props} className="w-full border p-3 rounded-lg bg-gray-50" />
  </div>
);

const Textarea = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-1 text-gray-700">
      {icon} {label}
    </label>
    <textarea {...props} rows="3" className="w-full border p-3 rounded-lg" />
  </div>
);

export default Profile;
