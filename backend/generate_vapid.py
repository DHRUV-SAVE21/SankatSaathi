from py_vapid import Vapid
import base64

vapid = Vapid()
vapid.generate_keys()

# Save to file
vapid.save_key("vapid_private.pem")
vapid.save_public_key("vapid_public.pem")

# Get base64 encoded keys
with open("vapid_public.pem", "rb") as f:
    public_key = base64.urlsafe_b64encode(f.read()).decode().rstrip("=")

with open("vapid_private.pem", "rb") as f:
    private_key = base64.urlsafe_b64encode(f.read()).decode().rstrip("=")

print("VAPID Keys Generated!")
print("\nAdd these to your .env files:")
print(f"\nVAPID_PUBLIC_KEY={public_key}")
print(f"VAPID_PRIVATE_KEY={private_key}")
print(f"\nVITE_VAPID_PUBLIC_KEY={public_key}")
