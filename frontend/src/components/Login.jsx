



// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//     const { login, signUp } = useAuth();
//     const [isLogin, setIsLogin] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Form State
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [role, setRole] = useState('user');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         try {
//             if (isLogin) {
//                 await login(email, password);
//             } else {
//                 await signUp(email, password, fullName, role);
//                 alert("Account created! Please check your email for verification (if enabled) or login.");
//                 setIsLogin(true);
//             }
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
//             <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
//                 <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
//                     {isLogin ? 'Welcome Back' : 'Join SankatSaathi'}
//                 </h2>

//                 {error && (
//                     <div className="bg-red-500/20 border border-red-500 text-red-200 p-3 rounded mb-4 text-sm">
//                         {error}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {!isLogin && (
//                         <div>
//                             <label className="block text-sm text-gray-400 mb-1">Full Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full p-3 bg-black/40 border border-white/10 rounded focus:border-blue-500 outline-none transition"
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     )}

//                     <div>
//                         <label className="block text-sm text-gray-400 mb-1">Email Address</label>
//                         <input
//                             type="email"
//                             className="w-full p-3 bg-black/40 border border-white/10 rounded focus:border-blue-500 outline-none transition"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm text-gray-400 mb-1">Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-3 bg-black/40 border border-white/10 rounded focus:border-blue-500 outline-none transition"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     {!isLogin && (
//                         <div>
//                             <label className="block text-sm text-gray-400 mb-1">Role Request</label>
//                             <select
//                                 className="w-full p-3 bg-black/40 border border-white/10 rounded focus:border-blue-500 outline-none transition"
//                                 value={role}
//                                 onChange={(e) => setRole(e.target.value)}
//                             >
//                                 <option value="user">Citizen (User)</option>
//                                 <option value="volunteer">Volunteer (Responder)</option>
//                                 <option value="agency">Agency (Authority)</option>
//                             </select>
//                             <p className="text-xs text-gray-500 mt-1">
//                                 Note: Agency/Volunteer roles may require verification.
//                             </p>
//                         </div>
//                     )}

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition disabled:opacity-50"
//                     >
//                         {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
//                     </button>
//                 </form>

//                 <div className="mt-6 text-center text-sm text-gray-400">
//                     {isLogin ? "Don't have an account? " : "Already have an account? "}
//                     <button
//                         onClick={() => setIsLogin(!isLogin)}
//                         className="text-blue-400 hover:text-blue-300 font-semibold underline"
//                     >
//                         {isLogin ? 'Sign Up' : 'Login'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Zap, Lock, Globe, Activity, ArrowRight, User, Mail, Key, Building, Users } from 'lucide-react';

const Login = () => {
    const { login, signUp } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await signUp(email, password, fullName, role);
                alert("Account created! Please check your email for verification (if enabled) or login.");
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-[#050510] text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,20,40,1)_0%,#000000_100%)] z-0"></div>
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 z-0 pointer-events-none"></div>

            {/* LEFT PANEL: Platform Info */}
            <div className="hidden lg:flex w-3/5 relative z-10 flex-col justify-center px-20 border-r border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
                        <div className="w-12 h-12 rounded-xl bg-crisis-red/20 flex items-center justify-center border border-crisis-red/30">
                            <Shield className="w-6 h-6 text-crisis-red" />
                        </div>
                        <h1 className="text-3xl font-display font-bold tracking-wider">SANKAT<span className="text-crisis-red">SAATHI</span></h1>
                    </div>

                    <h2 className="text-5xl font-display font-bold leading-tight mb-8 animate-fade-in-up delay-100">
                        Next-Gen Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-crisis-cyan to-blue-500">Crisis Response Grid</span>
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed mb-12 animate-fade-in-up delay-200">
                        SankatSaathi is a centralized command platform designed to unify disaster management, resource allocation, and real-time threat intelligence.
                        We bridge the gap between ground units and strategic command using AI-driven analytics and satellite telemetry.
                    </p>

                    <div className="grid grid-cols-2 gap-8 animate-fade-in-up delay-300">
                        <div className="flex gap-4">
                            <Activity className="w-6 h-6 text-crisis-red mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Real-Time Intel</h3>
                                <p className="text-sm text-gray-500">Live incident tracking with sub-second latency.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Globe className="w-6 h-6 text-crisis-cyan mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Global Coverage</h3>
                                <p className="text-sm text-gray-500">Unified map view spanning 190+ territories.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Zap className="w-6 h-6 text-yellow-500 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">AI Logistics</h3>
                                <p className="text-sm text-gray-500">Automated resource routing and supply chain optimization.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Lock className="w-6 h-6 text-green-500 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Secure Comms</h3>
                                <p className="text-sm text-gray-500">Encrypted channels for agency interoperability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: Login Form */}
            <div className="w-full lg:w-2/5 flex items-center justify-center p-8 relative z-20">
                <div className="w-full max-w-md p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-crisis-red/50 to-transparent"></div>

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold mb-2 text-white">
                            {isLogin ? 'Welcome Back' : 'Join SankatSaathi'}
                        </h2>
                        <div className="flex justify-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                            <p className="text-xs text-green-500 font-mono tracking-widest uppercase">
                                {isLogin ? 'Secure Connection Established' : 'New Operative Registration'}
                            </p>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded bg-red-500/10 border border-red-500/20 text-red-200 text-sm flex items-center gap-2">
                            <Shield className="w-4 h-4" /> {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-500 ml-1 flex items-center gap-2">
                                    <User className="w-3 h-3" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crisis-red/50 transition-colors"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-gray-500 ml-1 flex items-center gap-2">
                                <Mail className="w-3 h-3" /> Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crisis-red/50 transition-colors"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="user@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-gray-500 ml-1 flex items-center gap-2">
                                <Key className="w-3 h-3" /> Password
                            </label>
                            <input
                                type="password"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crisis-red/50 transition-colors"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-500 ml-1 flex items-center gap-2">
                                    <Users className="w-3 h-3" /> Role Request
                                </label>
                                <select
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-crisis-red/50 transition-colors"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">Citizen (User)</option>
                                    <option value="volunteer">Volunteer (Responder)</option>
                                    <option value="agency">Agency (Authority)</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-2 pl-1">
                                    Note: Agency/Volunteer roles may require verification.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-crisis-red hover:bg-red-600 text-white font-bold py-4 rounded-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-pulse">Processing...</span>
                            ) : (
                                <>
                                    {isLogin ? 'INITIALIZE SESSION' : 'REGISTER OPERATIVE'}
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-gray-400 pb-0.5"
                        >
                            {isLogin ? "Don't have an account? Request New Operative Clearance" : "Already have an account? Return to Login Interface"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;