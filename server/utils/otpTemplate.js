export const otpTemplate= (otp)=>`
  <div style="font-family: Arial; padding: 20px;">
    <h2> Verify your email</h2>
    <p> Your OTP is:</p>
    <h1 style="letter-spacing: 4px;">${otp}</h1>
    <p>This OTP will expire in 5 minutes.</p>
    <p>If you didn’t request this, ignore this email.</p>
  </div>
`