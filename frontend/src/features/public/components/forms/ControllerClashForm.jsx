import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    GraduationCap,
    Calendar,
    FileText,
    Users,
} from "lucide-react";
import { controllerclashForm } from "../../../../api/controllerclash.api";

const ControllerClashForm = () => {
    const initialState = {
        teamName: "",
        captainName: "",
        captainPhone: "",
        captainEmail: "",
        playerName: "",
        bgmiIGN: "",
        bgmiPlayerId: "",
        role: "",
        tournamentType: "",
        paymentScreenshot: null,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) {
                    payload.append(key, value);
                }
            });

            await controllerclashForm(payload);
            alert("Controller Clash registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008fad] focus:border-transparent transition-all outline-none text-gray-700";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#008fad] w-5 h-5 opacity-70";

    const labelClass =
        "block text-sm font-semibold text-gray-600 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#008fad] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Controller Clash: Esport Battleground
                    </h2>
                    <p className="mt-2 text-white/80">
                        Compete, Showcase Skills, and Fight for Glory
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* TEAM & CAPTAIN DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Users className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Team & Captain Details
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <Building className={iconClass} />
                                <input
                                    name="teamName"
                                    placeholder="Team Name"
                                    required
                                    value={formData.teamName}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="captainName"
                                    placeholder="Captain Name"
                                    required
                                    value={formData.captainName}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Phone className={iconClass} />
                                <input
                                    name="captainPhone"
                                    placeholder="Captain Phone (WhatsApp)"
                                    required
                                    value={formData.captainPhone}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Mail className={iconClass} />
                                <input
                                    name="captainEmail"
                                    type="email"
                                    placeholder="Captain Email Address"
                                    required
                                    value={formData.captainEmail}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </section>

                    {/* PLAYER DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <User className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Player Details
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="playerName"
                                    placeholder="Player Name"
                                    required
                                    value={formData.playerName}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <FileText className={iconClass} />
                                <input
                                    name="bgmiIGN"
                                    placeholder="BGMI In-Game Name (IGN)"
                                    required
                                    value={formData.bgmiIGN}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <FileText className={iconClass} />
                                <input
                                    name="bgmiPlayerId"
                                    placeholder="BGMI Player ID"
                                    required
                                    value={formData.bgmiPlayerId}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Users className={iconClass} />
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">Role (Optional)</option>
                                    <option value="IGL">IGL</option>
                                    <option value="Assaulter">Assaulter</option>
                                    <option value="Support">Support</option>
                                    <option value="Sniper">Sniper</option>
                                </select>
                            </div>

                            <div className="relative md:col-span-2">
                                <Calendar className={iconClass} />
                                <select
                                    name="tournamentType"
                                    required
                                    value={formData.tournamentType}
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">Tournament Type</option>
                                    <option value="Solo">Solo</option>
                                    <option value="Duo">Duo</option>
                                    <option value="Squad">Squad</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* PAYMENT & SCANNER */}
                    <section className="bg-gray-50 p-6 rounded-3xl border border-gray-200">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
                                Registration Details
                            </h3>
                            <div className="mt-4 p-4 bg-white rounded-2xl border shadow-sm inline-block">
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Registration Fee</p>
                                <p className="text-3xl font-black text-[#008fad]">₹ 1000.00</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1 text-center space-y-4">
                                <p className="font-bold text-gray-600 uppercase text-xs tracking-widest">Scan to Pay</p>
                                <div className="bg-white p-4 rounded-3xl shadow-xl inline-block border-2 border-[#008fad]/20">
                                    {/* Using a placeholder for UPI Scanner image as requested */}
                                    <img
                                        src="/payment/upi-scanner.png"
                                        alt="UPI Scanner"
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 font-medium italic">Pay via any UPI App (GPay, PhonePe, Paytm)</p>
                            </div>

                            <div className="flex-1 w-full space-y-4">
                                <label className={labelClass}>
                                    Upload Payment Screenshot *
                                </label>
                                <div className="relative group p-6 bg-white border-2 border-dashed rounded-3xl hover:border-[#008fad] transition-all cursor-pointer">
                                    <input
                                        type="file"
                                        name="paymentScreenshot"
                                        accept="image/*"
                                        required
                                        onChange={handleChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="text-center">
                                        <FileText className="w-10 h-10 text-[#008fad] mx-auto mb-2 opacity-60" />
                                        <p className="text-sm font-bold text-gray-700">
                                            {formData.paymentScreenshot ? formData.paymentScreenshot.name : "Click to upload image"}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">PNG, JPG or JPEG up to 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#008fad] text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-teal-200/50 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 tracking-widest uppercase"
                    >
                        {loading ? "Processing..." : "Finish Registration"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ControllerClashForm;
