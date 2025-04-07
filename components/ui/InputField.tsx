interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  rows?: number;
}

export const InputField = ({
  id,
  label,
  type = "text",
  rows,
}: InputFieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm text-slate-400">
      {label}
    </label>
    <div className="relative">
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      )}

      {/* Decorative border effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500" />
      </div>
    </div>
  </div>
);
