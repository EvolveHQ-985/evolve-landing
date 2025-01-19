import * as React from "react"
import {X} from 'lucide-react';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  if (!isOpen) return null // Don't render if the modal is not open

  return (
    <div
      className={`fixed px-4 pt-20 inset-0 z-50 flex items-center justify-center bg-black/50 ${className || ""}`}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
      aria-modal="true"
    >
      <section
        className={`relative bg-white text-black rounded-lg shadow-lg w-full max-w-lg p-6 border border-red-600 animate-fade-in`}
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-2xl font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 hover:text-gray-700 border-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </header>

        {/* Content */}
        <div className="py-4">{children}</div>
      </section>
    </div>
  )
}
