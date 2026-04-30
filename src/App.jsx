import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Coffee, Music, Mountain, MapPin, Star, Shield, LogOut, Award, Navigation, Crosshair, Palette, Tent, Gamepad2, Ticket, Plus, Timer, Camera, MessageSquare, Flame, Bell, UserPlus, AlertTriangle, Heart, Handshake, Users, Trophy, Radio, Lock, Search, SlidersHorizontal } from 'lucide-react';
import './index.css';

// --- 1. Main Home Feed ---
const HomeFeed = ({ setActiveTab }) => {
  const [activeSort, setActiveSort] = useState('popular');
  const events = [
    { id: 1, title: 'Açık Hava Akustik Konser', time: '19:00 - Bugün', type: 'concert', icon: <Music size={20} />, image: 'https://images.unsplash.com/photo-1540039155732-61ee1229f3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 12, comments: 3 },
    { id: 2, title: 'Moda Sahnesi: Tiyatro', time: '20:00 - Yarın', type: 'theater', icon: <Ticket size={20} />, image: 'https://images.unsplash.com/photo-1507676184212-d0330a156f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 6, comments: 0 },
    { id: 3, title: 'Üçüncü Nesil Kahve Tadımı', time: '14:30 - Çrş', type: 'coffee', icon: <Coffee size={20} />, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 4, comments: 1 },
    { id: 4, title: 'Belgrad Ormanı Piknik', time: '12:00 - Cmt', type: 'picnic', icon: <Tent size={20} />, image: 'https://images.unsplash.com/photo-1596227419827-023a1a672322?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 15, comments: 5 },
    { id: 5, title: 'Sulu Boya Atölyesi', time: '16:00 - Pzr', type: 'art', icon: <Palette size={20} />, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 8, comments: 2 },
    { id: 6, title: 'Kutu Oyunu (Catan) Gecesi', time: '19:30 - Cmt', type: 'game', icon: <Gamepad2 size={20} />, image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffaed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 3, comments: 0 },
    { id: 7, title: 'Hafta Sonu Doğa Yürüyüşü', time: '08:00 - Pzr', type: 'hiking', icon: <Mountain size={20} />, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', participants: 8, comments: 8 },
  ];

  return (
    <div style={{ padding: '20px', paddingBottom: '100px', height: '100%', overflowY: 'auto' }}>
      {/* Top Search & Filter Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', marginTop: '20px' }}>
        <div className="glass-panel" style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '12px 16px', borderRadius: '24px', border: '1px solid rgba(0, 229, 255, 0.4)', boxShadow: '0 0 15px rgba(0, 229, 255, 0.15)' }}>
          <Search size={20} color="var(--accent-primary)" style={{ marginRight: '12px' }} />
          <input 
            type="text" 
            placeholder="İsim veya Etkinlik Ara..." 
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '15px', width: '100%', outline: 'none' }} 
          />
        </div>
        <div className="glass-panel" style={{ padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(137, 207, 240, 0.4)' }}>
          <SlidersHorizontal size={20} color="var(--accent-secondary)" />
        </div>
      </div>

      {/* Yeni Etkinlik Oluştur Butonu */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))',
          border: '1px dashed var(--accent-primary)',
          borderRadius: '24px', padding: '16px', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}
        onClick={() => alert('Yeni etkinlik oluşturma formu açılacak!')}
      >
        <div style={{ background: 'var(--accent-primary)', padding: '12px', borderRadius: '50%', color: '#fff', boxShadow: 'var(--shadow-glow)' }}>
          <Plus size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: '#fff' }}>Kendi Etkinliğini Yarat</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Beraber yapacak birilerini bul</p>
        </div>
      </motion.div>

      {/* Sorting & Filter Mechanism */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', alignItems: 'center', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', whiteSpace: 'nowrap' }}>
        <button onClick={() => setActiveSort('popular')} style={{ background: activeSort === 'popular' ? '#1C1F2E' : 'transparent', border: activeSort === 'popular' ? '1px solid var(--glass-border)' : '1px solid transparent', color: activeSort === 'popular' ? '#fff' : 'var(--text-secondary)', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.3s', flexShrink: 0 }}>
          <Flame size={16} color={activeSort === 'popular' ? '#fff' : 'var(--text-secondary)'} /> Popüler
        </button>
        <button onClick={() => setActiveSort('trending')} style={{ background: activeSort === 'trending' ? '#00E5FF' : 'transparent', border: activeSort === 'trending' ? 'none' : '1px solid var(--glass-border)', color: '#fff', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.3s', flexShrink: 0 }}>
          <MapPin size={16} /> Yakınımda
        </button>
        <button onClick={() => setActiveSort('foryou')} style={{ background: activeSort === 'foryou' ? '#FF5A5F' : 'transparent', border: activeSort === 'foryou' ? 'none' : '1px solid var(--glass-border)', color: '#fff', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.3s', flexShrink: 0 }}>
          <Star size={16} /> İlgini Çekebilecekler
        </button>
      </div>

      {/* Sosyal Puanlar ve Rozetler (RPG Dashboard) */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Sosyal Puanlar ve Rozetler</h2>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Skor: 1250</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', whiteSpace: 'nowrap' }}>
          <div className="glass-panel" style={{ minWidth: '120px', padding: '16px 12px', textAlign: 'center', borderRadius: '20px', border: '1px solid rgba(255,215,0,0.2)' }}>
            <div style={{ background: 'linear-gradient(135deg, #FFD700, #FDB931)', width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(255,215,0,0.4)' }}>
              <Timer size={24} color="#000" />
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: '#fff' }}>Dakik Birey</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>Punctual Birey</p>
          </div>
          <div className="glass-panel" style={{ minWidth: '120px', padding: '16px 12px', textAlign: 'center', borderRadius: '20px' }}>
            <div style={{ background: 'linear-gradient(135deg, #FFB8B8, #FF8A8A)', width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Handshake size={24} color="#000" />
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: '#fff' }}>Gönüllü Lider</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>Volunteer Lider</p>
          </div>
          <div className="glass-panel" style={{ minWidth: '120px', padding: '16px 12px', textAlign: 'center', borderRadius: '20px' }}>
            <div style={{ background: 'linear-gradient(135deg, #52C4FF, #1E90FF)', width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Users size={24} color="#fff" />
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: '#fff' }}>Topluluk Ruhu</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>Komünite Ruhu</p>
          </div>
          <div className="glass-panel" style={{ minWidth: '120px', padding: '16px 12px', textAlign: 'center', borderRadius: '20px' }}>
            <div style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Tent size={24} color="#fff" />
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: '#fff' }}>Doğa Dostu</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>Çevre Rehberi</p>
          </div>
          <div className="glass-panel" style={{ minWidth: '120px', padding: '16px 12px', textAlign: 'center', borderRadius: '20px' }}>
            <div style={{ background: 'linear-gradient(135deg, #89CFF0, #FF5E9E)', width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(137,207,240,0.4)' }}>
              <Palette size={24} color="#fff" />
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: '#fff' }}>Sanatsever</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>Kültür Elçisi</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {events.map(event => (
          <div key={event.id}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', zIndex: 2, background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
              <div style={{ height: '140px', position: 'relative' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,17,26,1) 0%, rgba(15,17,26,0) 100%)' }} />
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '8px', borderRadius: '50%', color: '#fff' }}>
                  <Camera size={16} />
                </div>
              </div>
              
              <div style={{ padding: '0 20px 20px', marginTop: '-20px', position: 'relative', zIndex: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ background: 'var(--accent-primary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', boxShadow: 'var(--shadow-glow)' }}>
                    {event.icon}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-tertiary)' }}>{event.time}</span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>{event.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  <User size={14} /> {event.participants} kişi katılıyor
                </div>
                
                {/* Event Details Section */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#fff', margin: 0 }}>Etkinlik Detayları</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>- Buluşma Noktası: Park Girişi</li>
                    <li>- Getirilecekler: Mat, Su</li>
                    <li>- Ücret: Ücretsiz</li>
                    <li>- Ek Notlar: Sessiz ortam</li>
                  </ul>
                </div>

                {/* Interaction Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', padding: 0 }}>
                    <Heart size={18} color="#00E5FF" fill="#00E5FF" /> 48 Beğeni
                  </button>
                  <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', padding: 0 }}>
                    <MessageSquare size={18} /> Yorum Yap
                  </button>
                  <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', padding: 0 }}>
                    <UserPlus size={18} /> Arkadaş Ekle
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Comments & Discussion UI */}
            {event.comments > 0 && (
              <div style={{ background: 'rgba(28, 31, 46, 0.4)', borderRadius: '0 0 20px 20px', padding: '16px', marginTop: '-10px', paddingTop: '20px', border: '1px solid var(--glass-border)', borderTop: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FF5A5F', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>M</div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '16px', fontSize: '13px', color: '#E2E8F0' }}>
                    <span style={{ fontWeight: 600, color: '#00E5FF', marginRight: '6px' }}>Mert:</span>
                    Ben de geliyorum, buluşma noktası tam neresi?
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="text" placeholder="Tartışmaya katıl..." style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '20px', color: '#fff', fontSize: '13px', outline: 'none' }} />
                  <button style={{ background: 'var(--accent-primary)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>+</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sürpriz Rota (Mystery Meetup) Button */}
      <motion.button
        className="floating-btn"
        onClick={() => setActiveTab('map')}
        style={{
          position: 'absolute', bottom: '100px', right: '20px', width: '64px', height: '64px',
          borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          border: 'none', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: 'var(--shadow-glow)', cursor: 'pointer', zIndex: 10
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Crosshair size={28} />
      </motion.button>
    </div>
  );
};

// --- 2. Social Radar (Heatmap) ---
const SocialRadar = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#0F111A', overflow: 'hidden' }}>
      {/* Minimalist City Grid Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Radar Sweep Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '50%', left: '50%', width: '1200px', height: '1200px', borderRadius: '50%', background: 'conic-gradient(from 0deg, transparent 70%, rgba(0,229,255,0.1) 95%, rgba(0,229,255,0.5) 100%)', transformOrigin: 'center center', marginLeft: '-600px', marginTop: '-600px', pointerEvents: 'none', zIndex: 1 }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '8px', height: '8px', borderRadius: '50%', background: '#00E5FF', transform: 'translate(-50%, -50%)', boxShadow: '0 0 20px #00E5FF', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.2)', transform: 'translate(-50%, -50%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '250px', height: '250px', borderRadius: '50%', border: '1px dashed rgba(0,229,255,0.2)', transform: 'translate(-50%, -50%)', zIndex: 1 }} />

      {/* Heatmap Pulses (Social Energy) */}
      {(activeFilter === 'all' || activeFilter === 'coffee') && (
        <>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '30%', left: '35%', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(137,207,240,0.8) 0%, rgba(137,207,240,0) 70%)', transform: 'translate(-50%, -50%)', zIndex: 1 }}
          />
          <div style={{ position: 'absolute', top: '30%', left: '35%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#89CFF0', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(137,207,240,0.6)' }}>
              <Coffee size={18} color="#fff" />
            </div>
            <div className="glass-panel" style={{ marginTop: '8px', padding: '6px 10px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>Kadıköy Kahve</span>
              <span style={{ fontSize: '9px', color: '#89CFF0', fontWeight: 700 }}>🔥 12 kişi burada</span>
              <button style={{ background: 'var(--accent-primary)', border: 'none', borderRadius: '8px', padding: '4px 12px', fontSize: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer', width: '100%', marginTop: '2px' }}>Anlık Katıl</button>
            </div>
          </div>
        </>
      )}

      {(activeFilter === 'all' || activeFilter === 'music') && (
        <>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ position: 'absolute', top: '65%', left: '65%', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.8) 0%, rgba(0,229,255,0) 70%)', transform: 'translate(-50%, -50%)', zIndex: 1 }}
          />
          <div style={{ position: 'absolute', top: '65%', left: '65%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#00E5FF', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(0,229,255,0.6)' }}>
              <Music size={18} color="#fff" />
            </div>
            <div className="glass-panel" style={{ marginTop: '8px', padding: '6px 10px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>Sahil Akustik</span>
              <span style={{ fontSize: '9px', color: '#00E5FF', fontWeight: 700 }}>🔥 34 kişi katılıyor</span>
              <button style={{ background: 'var(--accent-primary)', border: 'none', borderRadius: '8px', padding: '4px 12px', fontSize: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer', width: '100%', marginTop: '2px' }}>Anlık Katıl</button>
            </div>
          </div>
        </>
      )}

      {(activeFilter === 'all' || activeFilter === 'sports') && (
        <>
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ position: 'absolute', top: '20%', left: '75%', width: '100px', height: '100px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(82,196,255,0.8) 0%, rgba(82,196,255,0) 70%)', transform: 'translate(-50%, -50%)', zIndex: 1 }}
          />
          <div style={{ position: 'absolute', top: '20%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#52C4FF', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(82,196,255,0.6)' }}>
              <Mountain size={14} color="#fff" />
            </div>
          </div>
        </>
      )}

      {/* Top Header & Filters */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', zIndex: 10 }}>
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(137,207,240,0.2)', padding: '10px', borderRadius: '12px' }}>
              <Radio size={24} color="#89CFF0" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Sosyal Radar <span style={{ background: '#FF5A5F', color: '#fff', fontSize: '9px', padding: '2px 6px', borderRadius: '8px', fontWeight: 'bold' }}>CANLI</span>
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>Şu an çevrende 45 aktif etkinlik var</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
          <button onClick={() => setActiveFilter('all')} style={{ flexShrink: 0, background: activeFilter === 'all' ? 'var(--accent-primary)' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Hepsi</button>
          <button onClick={() => setActiveFilter('music')} style={{ flexShrink: 0, background: activeFilter === 'music' ? '#00E5FF' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Müzik</button>
          <button onClick={() => setActiveFilter('coffee')} style={{ flexShrink: 0, background: activeFilter === 'coffee' ? '#89CFF0' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Kahve & Sohbet</button>
          <button onClick={() => setActiveFilter('sports')} style={{ flexShrink: 0, background: activeFilter === 'sports' ? '#52C4FF' : 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Açık Hava</button>
        </div>
      </div>
    </div>
  );
};

// --- 3. Active Event Screen (Social Orbit Features) ---
const ActiveEvent = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [isLate, setIsLate] = useState(false);

  return (
    <div style={{ padding: '20px', paddingBottom: '100px', height: '100%', overflowY: 'auto', position: 'relative' }}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }} className="gradient-text">Aktif Etkinlik</h1>

        {/* Punctuality Challenge */}
        {!checkedIn ? (
          <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px', border: '1px solid #FFD700', boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div style={{ background: 'linear-gradient(135deg, #FFD700, #FDB931)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(255,215,0,0.6)' }}>
                <Timer size={32} color="#000" />
              </div>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#FFD700' }}>Dakiklik Meydan Okuması!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>Buluşma noktasına ilk sen var, altın rozeti kap!</p>

            <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px', fontVariantNumeric: 'tabular-nums' }}>
              14:59
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setCheckedIn(true)}
                style={{ flex: 1, padding: '16px', borderRadius: '16px', border: 'none', background: 'var(--safe-path)', color: '#000', fontWeight: 600, fontSize: '16px', cursor: 'pointer', boxShadow: 'var(--shadow-safe)' }}
              >
                Vardım! (İlk Ben)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => { setCheckedIn(true); setIsLate(true); }}
                style={{ flex: 1, padding: '16px', borderRadius: '16px', border: '1px solid #89CFF0', background: 'transparent', color: '#89CFF0', fontWeight: 600, fontSize: '16px', cursor: 'pointer' }}
              >
                Geç Kaldım...
              </motion.button>
            </div>
          </div>
        ) : (
          /* Checked In State */
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
            {isLate ? (
              <>
                <div style={{ background: 'rgba(137,207,240,0.2)', width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Coffee size={32} color="#89CFF0" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#89CFF0' }}>Oops, Geç Kaldın!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Geç kaldın! Arkadaşına küçük bir kahve ısmarla veya bir espri yap!</p>
              </>
            ) : (
              <>
                <div style={{ background: 'linear-gradient(135deg, #FFD700, #FDB931)', width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(255,215,0,0.6)' }}>
                  <Award size={32} color="#000" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#FFD700' }}>Tebrikler, Dakik Birey!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>İlk sen vardın! +100 Güvenilirlik Skoru kazandın.</p>
              </>
            )}
          </motion.div>
        )}

        {/* Micro-Missions (Active Social Dashboard) */}
        {checkedIn && (
          <div style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={20} color="var(--accent-tertiary)" /> Sosyal Mikro-Görevler
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'rgba(0,229,255,0.2)', padding: '12px', borderRadius: '12px' }}>
                  <Camera size={24} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, margin: 0 }}>Fotoğrafçı</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>Partnerinin profili için harika bir fotoğrafını çek.</p>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'rgba(82,196,255,0.2)', padding: '12px', borderRadius: '12px' }}>
                  <Music size={24} color="var(--accent-tertiary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, margin: 0 }}>Müzik Kaşifi</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>Yürüyüş yaparken 3 şarkılık bir liste paylaş.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* The Escape Button (Yarıda Bırakma Güvencesi) */}
        {checkedIn && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px',
              padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
              color: '#fff', cursor: 'pointer', justifyContent: 'center'
            }}
          >
            <div style={{ background: 'rgba(137,207,240,0.2)', padding: '10px', borderRadius: '12px' }}>
              <LogOut size={24} color="var(--accent-secondary)" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Erken Ayrıl (Zarif Kaçış)</h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>Mazeret bildirimi otomatik gönderilir</p>
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
};

// --- 4. Profile & Gamification ---
const Profile = () => {
  return (
    <div style={{ padding: '20px', paddingBottom: '100px', height: '100%', overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Profil</h1>
        <LogOut size={24} color="var(--text-secondary)" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="User" style={{ width: '80px', height: '80px', borderRadius: '24px', objectFit: 'cover' }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '22px', marginBottom: '4px' }}>Nazlı Y.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>Seviye 12 • Sosyal Kelebek</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ background: 'rgba(0,229,255,0.2)', color: 'var(--accent-primary)', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>Dobra Rehber</span>
          </div>
        </div>
      </div>

      {/* Biyografi */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', color: '#E2E8F0', lineHeight: 1.5, margin: 0 }}>
          Yeni mekanlar keşfetmeyi ve insanlarla tanışmayı seven bir kahve tutkunu. Haftasonları doğa yürüyüşlerinde, hafta içi sergilerde. ☕🌲
        </p>
      </div>

      {/* Etkileşim İstatistikleri */}
      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', padding: '16px', marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>128</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Takipçi</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>86</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Takip</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-tertiary)' }}>34</div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Etkinlik</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <button style={{ flex: 1, padding: '12px', borderRadius: '16px', background: 'var(--accent-primary)', color: '#fff', border: 'none', fontWeight: 600, fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          Takip Et
        </button>
        <button style={{ flex: 1, padding: '12px', borderRadius: '16px', background: 'transparent', border: '1px solid var(--glass-border)', color: '#fff', fontWeight: 600, fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <MessageSquare size={18} /> Mesaj
        </button>
      </div>

      {/* Güvenilirlik Skoru */}
      <div className="glass-panel" style={{ padding: '20px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '16px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={18} color="var(--safe-path)" /> Sosyal İtibar (Trust Score)
          </h3>
          <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--safe-path)' }}>88%</span>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
          <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1.5 }} style={{ height: '100%', background: 'linear-gradient(90deg, #10B981, #34D399)' }} />
          <motion.div initial={{ width: 0 }} animate={{ width: '12%' }} transition={{ duration: 1.5, delay: 0.5 }} style={{ height: '100%', background: '#FF5A5F' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '12px', background: 'rgba(255,90,95,0.1)', padding: '10px', borderRadius: '12px' }}>
          <AlertTriangle size={16} color="#FF5A5F" style={{ marginTop: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '12px', color: '#FF5A5F', margin: 0, lineHeight: 1.4 }}>Son etkinlikte son dakika iptali rapor edildi. İtibar puanınız -%12 düştü.</p>
        </div>
      </div>

      {/* Dakik Birey Şöhretler Müzesi */}
      <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Trophy size={20} color="#FFD700" /> Şöhretler Müzesi (Hall of Fame)
      </h3>
      <div className="glass-panel" style={{ padding: '16px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFD700', width: '20px', textAlign: 'center' }}>1</div>
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&w=100&q=80" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Burak Y.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,215,0,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
            <Timer size={14} color="#FFD700" /> <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: 600 }}>1420 Puan</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#C0C0C0', width: '20px', textAlign: 'center' }}>2</div>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&w=100&q=80" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Ayşe K.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,215,0,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
            <Timer size={14} color="#FFD700" /> <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: 600 }}>1380 Puan</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#CD7F32', width: '20px', textAlign: 'center' }}>3</div>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=100&q=80" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Sen (Nazlı Y.)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,215,0,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
            <Timer size={14} color="#FFD700" /> <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: 600 }}>1250 Puan</span>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Rozetler (Badges)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '32px' }}>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #FFD700, #FDB931)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(255,215,0,0.4)' }}>
            <Timer size={18} color="#000" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Dakik Birey</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Erken gelen</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #52C4FF, #1E90FF)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(82,196,255,0.4)' }}>
            <Navigation size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Kaşif</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>10 mekan</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #89CFF0, #FF5E9E)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(137,207,240,0.4)' }}>
            <Coffee size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Gurme</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>5 kahve</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #FF5A5F, #FF2A2F)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(255,90,95,0.4)' }}>
            <Flame size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Parti Hayvanı</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>15 etkinlik</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #00E5FF, #FF0055)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(0,229,255,0.4)' }}>
            <Palette size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sanatsever</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>3 sergi</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #34D399, #059669)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(52,211,153,0.4)' }}>
            <Tent size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Doğa Dostu</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Kampa katıldı</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #60A5FA, #2563EB)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(96,165,250,0.4)' }}>
            <Gamepad2 size={18} color="#fff" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Oyun Ustası</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>5 galibiyet</p>
        </div>
        <div className="glass-panel" style={{ padding: '12px 4px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(28,31,46,0.8), rgba(42,45,62,0.8))' }}>
          <div style={{ background: 'linear-gradient(135deg, #FCD34D, #F59E0B)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(252,211,77,0.4)' }}>
            <Star size={18} color="#000" />
          </div>
          <h4 style={{ fontSize: '11px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Ev Sahibi</h4>
          <p style={{ fontSize: '9px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>10 davet</p>
        </div>
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Yetenek Ağacı (Skill-Tree)</h3>
      <div className="glass-panel" style={{ height: '520px', position: 'relative', overflow: 'hidden' }}>
        
        {/* SVG Connection Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          {/* Defs for glowing effects */}
          <defs>
            <filter id="glowPink" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Root to Branches */}
          <path d="M 50% 12% Q 25% 12% 25% 25%" fill="none" stroke="#89CFF0" strokeWidth="3" filter="url(#glowPink)" />
          <path d="M 50% 12% Q 75% 12% 75% 25%" fill="none" stroke="#52C4FF" strokeWidth="3" filter="url(#glowCyan)" />
          
          {/* Root to Trunk */}
          <line x1="50%" y1="12%" x2="50%" y2="38%" stroke="#00E5FF" strokeWidth="3" strokeDasharray="6,6" />

          {/* Music Branch (Pink) */}
          <line x1="25%" y1="25%" x2="25%" y2="48%" stroke="#89CFF0" strokeWidth="3" filter="url(#glowPink)" />
          <line x1="25%" y1="48%" x2="25%" y2="70%" stroke="#89CFF0" strokeWidth="3" filter="url(#glowPink)" />
          <line x1="25%" y1="70%" x2="25%" y2="88%" stroke="#89CFF0" strokeWidth="3" filter="url(#glowPink)" />

          {/* Cultural Branch (Cyan) */}
          <line x1="75%" y1="25%" x2="75%" y2="48%" stroke="#52C4FF" strokeWidth="3" filter="url(#glowCyan)" />
          <line x1="75%" y1="48%" x2="75%" y2="70%" stroke="#52C4FF" strokeWidth="3" filter="url(#glowCyan)" />
          <line x1="75%" y1="70%" x2="75%" y2="88%" stroke="#52C4FF" strokeWidth="3" filter="url(#glowCyan)" />

          {/* Central Trunk (Locked - Gray/Dashed) */}
          <line x1="50%" y1="38%" x2="50%" y2="60%" stroke="#475569" strokeWidth="2" strokeDasharray="6,6" />
          <line x1="50%" y1="60%" x2="50%" y2="82%" stroke="#475569" strokeWidth="2" strokeDasharray="6,6" />

          {/* Trunk Interconnections (Optional - crossing branches) */}
          <path d="M 25% 48% Q 50% 48% 50% 60%" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
          <path d="M 75% 48% Q 50% 48% 50% 60%" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
        </svg>

        {/* Nodes */}
        {/* Central Avatar Root */}
        <div style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--accent-primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-glow)', border: '2px solid #fff' }}>
            <User size={32} color="#fff" />
          </div>
        </div>

        {/* --- Music Branch --- */}
        <div style={{ position: 'absolute', top: '25%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--accent-secondary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(137,207,240,0.6)', border: '2px solid rgba(255,255,255,0.8)' }}>
            <Music size={22} color="#fff" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '6px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Müzik Temeli</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '48%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(137,207,240,0.2)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #89CFF0' }}>
            <Music size={18} color="#89CFF0" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Müzik Meraklısı</div>
            <div style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>5/5 ✓</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '70%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(137,207,240,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #89CFF0' }}>
            <Star size={18} color="#89CFF0" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Müzik Keşifi</div>
            <div style={{ fontSize: '8px', color: '#89CFF0' }}>2/3</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '88%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px dashed rgba(137,207,240,0.4)' }}>
            <Flame size={20} color="rgba(137,207,240,0.4)" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Konser Kurdu</div>
            <div style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>0/15</div>
          </div>
        </div>

        {/* --- Cultural Branch --- */}
        <div style={{ position: 'absolute', top: '25%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--accent-tertiary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(82,196,255,0.6)', border: '2px solid rgba(255,255,255,0.8)' }}>
            <Mountain size={22} color="#fff" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '6px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Kültür Temeli</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '48%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(82,196,255,0.2)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #52C4FF' }}>
            <MapPin size={18} color="#52C4FF" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Şehir Kaşifi</div>
            <div style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>5/5 ✓</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '70%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px dashed rgba(82,196,255,0.4)' }}>
            <Camera size={18} color="rgba(82,196,255,0.4)" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Müze Gezgini</div>
            <div style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>0/3</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '88%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px dashed rgba(82,196,255,0.4)' }}>
            <Award size={20} color="rgba(82,196,255,0.4)" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Tarih Tutkunu</div>
            <div style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>0/10</div>
          </div>
        </div>

        {/* --- Central Trunk (Locked) --- */}
        <div style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--bg-tertiary)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #475569' }}>
            <Lock size={20} color="#94A3B8" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#94A3B8', whiteSpace: 'nowrap' }}>Sosyal Lider</div>
            <div style={{ fontSize: '8px', color: '#00E5FF' }}>Kilidi Aç (100P)</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--bg-tertiary)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #475569' }}>
            <Lock size={20} color="#94A3B8" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#94A3B8', whiteSpace: 'nowrap' }}>Etkinlik Ustası</div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '82%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--bg-tertiary)', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #475569' }}>
            <Lock size={20} color="#94A3B8" />
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#94A3B8', whiteSpace: 'nowrap' }}>Yaratıcı Ev Sahibi</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- 5. Interaction Hub (Notifications & Friend Requests) ---
const InteractionHub = () => {
  return (
    <div style={{ padding: '20px', paddingBottom: '100px', height: '100%', overflowY: 'auto' }}>
      <div style={{ marginTop: '20px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700 }} className="gradient-text">Hub</h1>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
          <UserPlus size={18} /> Arkadaşlık İstekleri
        </h3>
        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: 0, fontSize: '15px', color: '#fff' }}>Can K.</h4>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>Açık Hava Konseri'nden</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'var(--accent-primary)', border: 'none', padding: '6px 12px', borderRadius: '12px', color: '#fff', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Kabul Et</button>
              <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '6px 12px', borderRadius: '12px', color: '#fff', fontSize: '12px', cursor: 'pointer' }}>Reddet</button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(255, 46, 147, 0.1)', padding: '10px', borderRadius: '12px' }}>
            <Shield size={14} color="#00E5FF" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '11px', color: '#00E5FF', lineHeight: 1.4 }}>Güvenlik Katmanı: Mesaj istekleri yalnızca karşılıklı takipleşme veya arkadaşlık durumunda iletilir.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
          <Bell size={18} /> Bildirimler & Görevler
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(255, 215, 0, 0.2)', padding: '10px', borderRadius: '12px' }}>
              <Award size={20} color="#FFD700" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '13px', color: '#fff' }}><strong>Dakik Birey</strong> rozetini kazandın!</p>
              <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-secondary)' }}>2 saat önce</p>
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(82, 196, 255, 0.2)', padding: '10px', borderRadius: '12px' }}>
              <MessageSquare size={20} color="var(--accent-tertiary)" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '13px', color: '#fff' }}><strong>Mert</strong> etkinliğine yorum yaptı.</p>
              <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-secondary)' }}>Dün</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Main Content Area */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            style={{ height: '100%' }}
          >
            {activeTab === 'home' && <HomeFeed setActiveTab={setActiveTab} />}
            {activeTab === 'map' && <SocialRadar />}
            {activeTab === 'event' && <ActiveEvent />}
            {activeTab === 'hub' && <InteractionHub />}
            {activeTab === 'profile' && <Profile />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '80px', background: 'var(--glass-bg)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '0 10px', zIndex: 50
      }}>
        {[
          { id: 'home', icon: Home, label: 'Keşfet' },
          { id: 'hub', icon: Bell, label: 'Hub' },
          { id: 'map', icon: Radio, label: 'Radar' },
          { id: 'event', icon: Star, label: 'Aktif' },
          { id: 'profile', icon: User, label: 'Profil' }
        ].map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                background: 'transparent', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '4px', cursor: 'pointer', color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                transition: 'all 0.3s ease', padding: '10px'
              }}
            >
              <motion.div whileTap={{ scale: 0.8 }}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              <span style={{ fontSize: '11px', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
