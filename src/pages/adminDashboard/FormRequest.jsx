import React, { useEffect, useState } from "react";
import { Search, PlusCircle, Pencil, Trash2, FileText, Eye } from "lucide-react";
import api from "../../api/axios";
import ApiStatusModal from "../../components/ApiStatusModal";
import { NavLink } from "react-router-dom";

const FormRequest = () => {
  const [search, setSearch] = useState("");
  const [allFormData, setallFormData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const openModal = (data) => setModal({ open: true, ...data })

  useEffect(() => {
    const getAllForm = async () => {
      try {
        api.get("/form/getform")
          .then((res) => {
            console.log(res.data)
            if (res.data.success) {
              setallFormData(res.data.data)
            }
          })
      } catch (err) {
        console.log(error)
      }
    }
    getAllForm();
  }, [refresh])

  console.log("all form data", allFormData);

  // const filteredForms = forms.filter((form) =>
  //   form.title.toLowerCase().includes(search.toLowerCase())
  // );

  function deleteForm(id) {
    console.log(id)
    try {
      api.delete(`/form/delete/${id}`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            openModal({
              type: "success",
              title: "delete Successfilly",
              massage: res.data.massage,
            })
          }
        })
      setRefresh((prev) => !prev)
    } catch (err) {

    }
  }

  return (
    <section className="p-6 space-y-8 text-gray-700 min-h-screen">

      <ApiStatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, open: false })}
      />

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl font-semibold text-emerald-700">
          Form Management
        </h1>

        {/* SEARCH */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search form..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              bg-white text-gray-700 pl-10 pr-4 py-2 rounded-xl
              outline-none w-64 border border-emerald-300
              focus:ring-2 focus:ring-emerald-500 transition-all
            "
          />
        </div>

        {/* CREATE BUTTON */}
        <NavLink to={"/admin/formrequest/CreateForm"}>
        <button
          className="
            flex items-center gap-2 px-5 py-2 rounded-xl
            bg-emerald-600 text-white shadow-md
            hover:bg-emerald-700 transition font-medium
          "
        >
          <PlusCircle size={18} />
          Create New Form
        </button>
        </NavLink>
      </div>

      {/* TABLE CARD */}
      <div
        className="
          bg-white p-6 rounded-2xl shadow-md
          border border-emerald-300/40
        "
      >
        <h2 className="text-xl font-semibold mb-5 text-emerald-700">
          Forms Overview
        </h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-emerald-100 text-emerald-700">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Required Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {allFormData.map((form) => (
                <tr
                  key={form.id}
                  className="border-t border-gray-200 hover:bg-emerald-50 transition"
                >
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <FileText size={18} className="text-emerald-600" />
                    {form.title}
                  </td>

                  <td className="py-3 px-4">{form.applicationStartDate}</td>
                  <td className="py-3 px-4">{form.applicationEndDate}</td>

                  {/* DOCUMENT TAGS */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.requiredDocuments.map((doc, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200"
                        >
                          {doc.name}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="py-3 px-4 flex gap-3">
                    <NavLink to={"/admin/formrequest/EditForm"}>
                    <button
                      className="
                        p-2 rounded-lg bg-emerald-100 text-emerald-700
                        hover:bg-emerald-200 transition
                      "
                    >
                      <Pencil size={18} />
                    </button>
                    </NavLink>
                    <button
                      className="
                        p-2 rounded-lg bg-red-100 text-red-700
                        hover:bg-red-200 transition
                      "
                      onClick={() => { deleteForm(form._id) }}
                    >
                      <Trash2 size={18} />
                    </button>
                    

                    <NavLink to={"/admin/formrequest/ViewDetails"}>
                    <button
                      className="
                     p-2 rounded-lg bg-blue-100 text-blue-700
                   hover:bg-blue-200 transition
                     "
                      
                    >
                      <Eye size={18} />
                    </button>
                    </NavLink>

                  </td>
                </tr>
              ))}

              {/* EMPTY STATE */}
              {allFormData.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No forms found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FormRequest;
