// db/seed-admin.js — Creates the first admin user
// Usage: node db/seed-admin.js
// IMPORTANT: Change the password after first login!
import postgres from 'postgres';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

const sql = postgres(process.env.DATABASE_URL);

const EMAIL = 'admin@brisafoundation.com.ng';
const PASSWORD = 'BrisaAdmin2024!'; // Change this immediately

const hash = await bcrypt.hash(PASSWORD, 12);

try {
  await sql`
    INSERT INTO admin_users (id, email, password_hash, name, role)
    VALUES (${randomUUID()}, ${EMAIL}, ${hash}, 'Site Administrator', 'admin')
    ON CONFLICT (email) DO NOTHING
  `;
  console.log('✅ Admin user created');
  console.log('   Email:    ', EMAIL);
  console.log('   Password: ', PASSWORD);
  console.log('⚠️  IMPORTANT: Change this password after your first login!');
} catch (err) {
  console.error('❌ Error creating admin:', err.message);
} finally {
  await sql.end();
}
