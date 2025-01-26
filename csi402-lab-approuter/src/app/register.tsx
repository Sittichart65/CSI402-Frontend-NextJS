import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    if (password === confirmPassword) {
      setIsRegistered(true);
    } else {
      alert('รหัสผ่านไม่ตรงกัน');
    }
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <h1>คุณลงทะเบียนแล้ว</h1>
          <p>คุณสามารถเข้าสู่ระบบได้ภายใน 30 นาที</p>
          <Link href="/">
            <a>กลับไปหน้าเข้าสู่ระบบ</a>
          </Link>
        </div>
      ) : (
        <div>
          <h1>ลงทะเบียน</h1>
          <form>
            <label>ชื่อผู้ใช้งาน:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>รหัสผ่าน:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label>ยืนยันรหัสผ่าน:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />
            <button onClick={handleRegister}>ลงทะเบียน</button>
          </form>
        </div>
      )}
    </div>
  );
}