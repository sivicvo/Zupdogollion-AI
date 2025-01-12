"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Home,
    Type,
    ImageIcon,
    User,
    BookMarked,
    FileText,
    HelpCircle,
    ChevronDown,
} from "lucide-react";

export default function Sidebar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-56 bg-[#1d2833] border-r border-gray-800 min-h-screen p-4 divide-y divide-dashed">
            {/* Profile Section */}
            <div className="mb-4 mt-4">
                <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 w-full p-2 rounded-lg"
                >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <User size={20} />
                    </div>
                    <span>Nickname</span>
                    <ChevronDown className="ml-auto" size={16} />
                </button>
            </div>

            {/* Main Navigation */}
            <nav className="space-y-2 pt-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <Home size={20} />
                    <span>Homepage</span>
                </Link>

                <Link
                    href="/generate"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <Type size={20} />
                    <span>Text to meme</span>
                </Link>

                <Link
                    href="/all-memes"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <ImageIcon size={20} />
                    <span>All memes</span>
                </Link>
            </nav>

            {/* Profile Section */}
            <div className="mt-4 pt-4 space-y-2">
                <Link
                    href="/profile"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <User size={20} />
                    <span>Profile</span>
                </Link>

                <Link
                    href="/my-memes"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <ImageIcon size={20} />
                    <span>My Memes</span>
                </Link>

                <Link
                    href="/saved"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <BookMarked size={20} />
                    <span>Saved Memes</span>
                </Link>
            </div>

            {/* Footer Links */}
            <div className="absolute bottom-8 space-y-2">
                <Link
                    href="/docs"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <FileText size={20} />
                    <span>Docs</span>
                </Link>

                <Link
                    href="/support"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gray-100 p-2 rounded-lg hover:bg-gray-800"
                >
                    <HelpCircle size={20} />
                    <span>Support</span>
                </Link>
            </div>
        </div>
    );
}
