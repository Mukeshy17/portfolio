export default function ContactMe() {
    return (
        <section id="contact" className="bg-zinc-900 py-16 px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-semibold text-center text-white mb-8">
                Contact Me
            </h2>
            <div className="max-w-4xl mx-auto bg-zinc-800 rounded-lg shadow-lg p-8">
                <form
                    action="#"
                    method="POST"
                    className="space-y-6"
                >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        {/* Name Field */}
                        <div className="flex-1">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your name"
                                className="w-full mt-1 px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex-1">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Write your message here"
                            className="w-full mt-1 px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-md bg-green-400 text-black font-semibold hover:bg-green-500 transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
