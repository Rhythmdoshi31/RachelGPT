export function getAuthErrorMessage(error: unknown) {
  const message =
    error instanceof Error
      ? error.message.toLowerCase()
      : "";

  // Network / connection problems
  if (
    message.includes("network") ||
    message.includes("fetch") ||
    message.includes("connection") ||
    message.includes("internet")
  ) {
    return "We couldn't connect. Please check your internet connection and try again.";
  }

  // Existing account
  if (
    message.includes("user already registered") ||
    message.includes("already registered")
  ) {
    return "An account with this email already exists. Try logging in instead.";
  }

  // Wrong login credentials
  if (
    message.includes("invalid login credentials") ||
    message.includes("invalid credentials")
  ) {
    return "The email or password is incorrect. Please try again.";
  }

  // Email verification
  if (
    message.includes("email not confirmed") ||
    message.includes("email_not_confirmed")
  ) {
    return "Please verify your email before logging in.";
  }

  // Rate limiting
  if (
    message.includes("too many requests") ||
    message.includes("rate limit")
  ) {
    return "Too many attempts. Please wait a moment and try again.";
  }

  // Password-related errors
  if (
    message.includes("password") &&
    (
      message.includes("weak") ||
      message.includes("at least")
    )
  ) {
    return "Please choose a stronger password.";
  }

  // Invalid email
  if (
    message.includes("invalid email") ||
    message.includes("email address")
  ) {
    return "Please enter a valid email address.";
  }

  // Fallback
  return "Something went wrong. Please try again.";
}