import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    Share2,
    Plus,
    Trash2,
    CreditCard,
    Camera,
    BookOpen,
    BrainCircuit,
} from "lucide-react";
import { bizaiQuizForm } from "../../../../api/bizaiquiz.api.js";

const BizaiQuizForm = () => {
    const initialState = {
        name: "", // Captain Name
        email: "", // Captain Email
        contact: "", // Captain Contact
        collegeName: "",
        city: "",
        whereDidYouHear: "",
        paymentScreenshot: null,
        teamMembers: [], // Array of { name, email, contact }
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleTeamMemberChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMembers = [...formData.teamMembers];
        updatedMembers[index][name] = value;
        setFormData((prev) => ({
            ...prev,
            teamMembers: updatedMembers,
        }));
    };

    const addTeamMember = () => {
        if (formData.teamMembers.length >= 3) {
            alert("Maximum 3 team members allowed");
            return;
        }
        setFormData((prev) => ({
            ...prev,
            teamMembers: [...prev.teamMembers, { name: "", email: "", contact: "" }],
        }));
    };

    const removeTeamMember = (index) => {
        const updatedMembers = formData.teamMembers.filter((_, i) => i !== index);
        setFormData((prev) => ({
            ...prev,
            teamMembers: updatedMembers,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = new FormData();
            // Append all fields except teamMembers first
            Object.entries(formData).forEach(([key, value]) => {
                if (key !== "teamMembers") {
                    payload.append(key, value);
                }
            });
            // Append teamMembers as JSON string
            payload.append("teamMembers", JSON.stringify(formData.teamMembers));

            await bizaiQuizForm(payload);
            alert("Bizai Quiz registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            console.error(err);
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3f51b5] focus:border-transparent transition-all outline-none text-gray-700";

    const memberInputClass =
        "w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3f51b5] focus:border-transparent transition-all outline-none text-gray-700 text-sm";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#3f51b5] w-5 h-5 opacity-70";

    const labelClass =
        "block text-sm font-semibold text-gray-600 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#3f51b5] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight underline italic decoration-white/30">
                        BIZAI QUIZ
                    </h2>
                    <a
                        href="/compitition/rule-book/RULE BOOK BIZAI QUIZ NAVONMESH 2026.pdf"
                        target="_blank"
                        className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-full transition-all border border-white/30"
                    >
                        <BookOpen className="w-4 h-4" />
                        Download Rule Book
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* CAPTAIN DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <BrainCircuit className="w-5 h-5 text-[#3f51b5]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Captain Information
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="name"
                                    placeholder="Captain Full Name"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Mail className={iconClass} />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Captain Email Address"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Phone className={iconClass} />
                                <input
                                    name="contact"
                                    placeholder="Captain Contact Number"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Building className={iconClass} />
                                <input
                                    name="collegeName"
                                    placeholder="College / Institute"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <MapPin className={iconClass} />
                                <input
                                    name="city"
                                    placeholder="City"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </section>

                    {/* TEAM MEMBERS */}
                    <section>
                        <div className="flex items-center justify-between mb-6 border-b pb-2">
                            <div className="flex items-center gap-2">
                                <Plus className="w-5 h-5 text-[#3f51b5]" />
                                <h3 className="text-lg font-bold text-gray-800">
                                    Team Members
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={addTeamMember}
                                disabled={formData.teamMembers.length >= 3}
                                className="flex items-center gap-1.5 px-4 py-1.5 bg-[#3f51b5]/10 text-[#3f51b5] rounded-full text-sm font-bold hover:bg-[#3f51b5]/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Plus className="w-4 h-4" />
                                {formData.teamMembers.length >= 3 ? "Limit Reached" : "Add Member"}
                            </button>
                        </div>

                        <div className="space-y-4">
                            {formData.teamMembers.length === 0 && (
                                <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-2xl border-2 border-dashed">
                                    Click "Add Member" to include your team members (if any).
                                </p>
                            )}
                            {formData.teamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 relative group">
                                    <button
                                        type="button"
                                        onClick={() => removeTeamMember(index)}
                                        className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                    <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">Member {index + 1}</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input
                                            name="name"
                                            placeholder="Name"
                                            required
                                            value={member.name}
                                            onChange={(e) => handleTeamMemberChange(index, e)}
                                            className={memberInputClass}
                                        />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={member.email}
                                            onChange={(e) => handleTeamMemberChange(index, e)}
                                            className={memberInputClass}
                                        />
                                        <input
                                            name="contact"
                                            placeholder="Contact"
                                            required
                                            value={member.contact}
                                            onChange={(e) => handleTeamMemberChange(index, e)}
                                            className={memberInputClass}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SURVEY */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Share2 className="w-5 h-5 text-[#3f51b5]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Survey
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative">
                                <Share2 className={iconClass} />
                                <select
                                    name="whereDidYouHear"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">Where did you hear about us?</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="College">College/Campus Ambassador</option>
                                    <option value="Friend">From a Friend</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* PAYMENT DETAILS */}
                    < section >
                        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
                            <CreditCard className="w-5 h-5 text-[#3f51b5]" />
                            <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Fee: ₹ 300.00 Per Team</h4>
                                    <p className="text-gray-600 text-sm mb-4">Scan the QR code to pay the registration fee and upload the screenshot below for verification.</p>
                                </div>
                                <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <img src="/compitition/scanner-upi.jpeg" alt="UPI Scanner" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#3f51b5] transition-colors">
                                <label className={labelClass}>Upload Payment Screenshot *</label>
                                <div className="flex items-center gap-4">
                                    <Camera className="text-[#3f51b5] w-8 h-8 opacity-60" />
                                    <input
                                        name="paymentScreenshot"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                        required
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3f51b5] file:text-white hover:opacity-90 transition-all cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </section >

                    {/* SUBMIT */}
                    < button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#3f51b5] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 hover:-translate-y-0.5 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Registration"}
                    </button >

                </form >
            </div >
        </div >
    );
};

export default BizaiQuizForm;
