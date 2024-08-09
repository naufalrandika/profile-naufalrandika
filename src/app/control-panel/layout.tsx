import SessionWrapper from '@/app/login/components/sessionwrapper'; // Sesuaikan path sesuai dengan struktur proyek Anda

export default function ControlPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <div>
        {/* Tambahkan komponen atau elemen khusus untuk control panel jika diperlukan */}
        {children}
      </div>
    </SessionWrapper>
  );
}
