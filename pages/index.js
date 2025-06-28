import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px' }}>
      <h2>Reset your password</h2>
      <Auth
        supabaseClient={supabase}
        view="update_password"
        appearance={{ theme: ThemeSupa }}
      />
      <a href="https://YOUR-STREAMLIT-APP.streamlit.app">Back to App</a>
    </div>
  )
}
