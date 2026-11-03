function UserProfileCard({ avatar, fullName, jobTitle, isOnline, skills }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60 sm:p-6">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={`Ảnh đại diện của ${fullName}`}
          className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-4 ring-indigo-50"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold text-slate-900">{fullName}</h3>
          <p className="mt-1 text-sm text-slate-500">{jobTitle}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-emerald-400' : 'bg-slate-400'}`} />
            {isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Kỹ năng</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.alert(`Đang kết nối với ${fullName}...`)}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
      >
        Liên hệ
      </button>
    </article>
  )
}

export default UserProfileCard
