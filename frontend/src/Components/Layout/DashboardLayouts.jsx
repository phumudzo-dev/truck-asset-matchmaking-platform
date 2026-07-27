const DashboardLayouts = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ background: "#1e3a8a", color: "white", padding: "20px 24px", borderRadius: "16px", marginBottom: "24px" }}>
          <h2 style={{ margin: 0 }}>TAMP Dashboard</h2>
          <p style={{ margin: "6px 0 0", opacity: 0.9 }}>Fleet operations overview</p>
        </header>
        <section style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
          {children}
        </section>
      </div>
    </div>
  );
};

export default DashboardLayouts;
