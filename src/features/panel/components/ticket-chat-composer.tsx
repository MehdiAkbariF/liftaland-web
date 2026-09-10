"use client";

import { useState } from "react";

interface TicketChatComposerProps {
  onSendMessage: (text: string) => void;
  isClosed: boolean;
}

export function TicketChatComposer({ onSendMessage, isClosed }: TicketChatComposerProps) {
  const [text, setText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isClosed) return;
    onSendMessage(text.trim());
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  if (isClosed) {
    return (
      <div className="shrink-0 p-2.5 bg-slate-50 dark:bg-industrial-950 text-center text-xs text-slate-500 border-t border-slate-200 dark:border-industrial-800">
        این گفتگو بسته شده است.
      </div>
    );
  }

  return (
    <div className="shrink-0 p-2 sm:p-3 border-t border-slate-200 dark:border-industrial-800 bg-white dark:bg-industrial-900">
      <form onSubmit={handleSend} className="flex items-center gap-1.5 sm:gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="پیام یا کد خطای آسانسور را بنویسید..."
          className="flex-1 h-10 px-3 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-industrial-700 bg-slate-50 dark:bg-industrial-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-500"
        />

        <button
          type="submit"
          disabled={!text.trim()}
          className="h-10 px-3.5 sm:px-4 rounded-xl bg-safety-500 hover:bg-safety-600 disabled:opacity-40 text-industrial-950 font-black text-xs transition-all shrink-0 flex items-center justify-center gap-1"
        >
          <span>ارسال</span>
          <span>←</span>
        </button>
      </form>
    </div>
  );
}