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
    CreditCard,
    Camera,
} from "lucide-react";
import { controllerclashForm } from "../../../../api/controllerclash.api";

const ControllerClashForm = () => {
    const initialState = {
        teamName: "",
        captainName: "",
        captainPhone: "",
        captainEmail: "",
        // Player 1
        playerName: "",
        bgmiIGN: "",
        bgmiPlayerId: "",
        role: "",
        // Player 2
        player2Name: "",
        player2IGN: "",
        player2Id: "",
        player2Role: "",
        // Player 3
        player3Name: "",
        player3IGN: "",
        player3Id: "",
        player3Role: "",
        // Player 4
        player4Name: "",
        player4IGN: "",
        player4Id: "",
        player4Role: "",
        tournamentType: "Squad",
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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#008fad] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Controller Clash: Esport Battleground
                    </h2>
                    {/* <p className="mt-2 text-white/80">
                        Compete, Showcase Skills, and Fight for Glory
                    </p> */}
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
                    <section className="space-y-12">
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <User className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Squad Details (4 Players)
                            </h3>
                        </div>

                        {[
                            { id: "", label: "Player 1 (Team Lead/Captain)" },
                            { id: "2", label: "Player 2" },
                            { id: "3", label: "Player 3" },
                            { id: "4", label: "Player 4" }
                        ].map((player, idx) => (
                            <div key={idx} className="space-y-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-[#008fad] flex items-center gap-2">
                                    <span className="bg-[#008fad] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        {idx + 1}
                                    </span>
                                    {player.label}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <User className={iconClass} />
                                        <input
                                            name={player.id ? `player${player.id}Name` : "playerName"}
                                            placeholder="Player Full Name"
                                            required
                                            value={formData[player.id ? `player${player.id}Name` : "playerName"]}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="relative">
                                        <FileText className={iconClass} />
                                        <input
                                            name={player.id ? `player${player.id}IGN` : "bgmiIGN"}
                                            placeholder="BGMI In-Game Name (IGN)"
                                            required
                                            value={formData[player.id ? `player${player.id}IGN` : "bgmiIGN"]}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="relative">
                                        <FileText className={iconClass} />
                                        <input
                                            name={player.id ? `player${player.id}Id` : "bgmiPlayerId"}
                                            placeholder="BGMI Player ID"
                                            required
                                            value={formData[player.id ? `player${player.id}Id` : "bgmiPlayerId"]}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="relative">
                                        <Users className={iconClass} />
                                        <select
                                            name={player.id ? `player${player.id}Role` : "role"}
                                            value={formData[player.id ? `player${player.id}Role` : "role"]}
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
                                </div>
                            </div>
                        ))}

                        <div className="relative">
                            <label className={labelClass}>Tournament Type</label>
                            <Calendar className={iconClass} />
                            <select
                                name="tournamentType"
                                required
                                value={formData.tournamentType}
                                onChange={handleChange}
                                className={inputClass}
                                disabled
                            >
                                <option value="Squad">Squad Only</option>
                            </select>
                        </div>
                    </section>

                    {/* PAYMENT DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
                            <CreditCard className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Fee: ₹ 1000.00 Per Team</h4>
                                    <p className="text-gray-600 text-sm mb-4">Scan the QR code to pay the registration fee and upload the screenshot below for verification.</p>
                                </div>
                                <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <img src="/compitition/scanner-upi.jpeg" alt="UPI Scanner" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#008fad] transition-colors">
                                <label className={labelClass}>Upload Payment Screenshot *</label>
                                <div className="flex items-center gap-4">
                                    <Camera className="text-[#008fad] w-8 h-8 opacity-60" />
                                    <input
                                        name="paymentScreenshot"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                        required
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#008fad] file:text-white hover:opacity-90 transition-all cursor-pointer"
                                    />
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
