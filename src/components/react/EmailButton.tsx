import { type ReactNode } from "react";

export default function EmailButton({
    emailHash,
    children
} : {
    emailHash: string
    children: ReactNode
}) {
    return (
        <button
            onClick={() => {
                try {
                    // We convert from Base64 to attempt to prevent spam bots from getting ahold of the email.
                    const email = atob(emailHash)

                    const c = confirm("Confirm you want to email Christian.")

                    if (c)
                        window.location.href = `mailto:${email}`
                } catch (err) {
                    console.error(`Failed to unhash email: ${err}`)
                    alert("Error getting email address.")
                }
            }}
        >
            {children}
        </button>
    )
}