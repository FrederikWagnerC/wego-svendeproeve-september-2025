import { useForm } from "react-hook-form";
import { useAuth } from "../providers/auth.provider";
import { fetchApi } from "../../utils/fetch/fetch";
import { toast } from "react-toastify";

export default function FormComponent({ isSignUp = true, onLoginSuccess, formClassNames, inputClassNames, buttonClassNames }) {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });
    const { loginData, setLoginData } = useAuth();

    const onSubmit = async (data) => {
        // Clear any previous confirmPassword errors
        clearErrors("confirmPassword");

        if (!isSignUp) {
            fetchApi("/api/auth/login", "POST", {
                username: data.email,
                password: data.password
            }).then(response => {
                if (response.success) {
                    setLoginData(response.data);
                    if (onLoginSuccess) onLoginSuccess();
                    const modal = document.getElementById("loginModal");
                    if (modal) {
                        modal.classList.add("hidden");
                        modal.classList.remove("flex");
                    }
                    const notify = () => toast.success("Login successful");
                    notify();
                } else {
                    setError("email", {
                        type: "manual",
                        message: response.error || "Login fejlede"
                    });
                }
            }).catch(error => {
                setError("email", {
                    type: "manual",
                    message: error.message || "Login fejlede"
                });
            });

            return; // Early return to prevent signup logic from running
        }


        // Manual validation for confirmPassword only on submit
        if (isSignUp && data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match"
            });
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className={formClassNames}>
            <div>
                <p className={`text-red-500 h-2 px-2 text-xs ${errors?.email ? "opacity-100" : "opacity-0"}`}>{errors?.email?.message}</p>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })}
                    placeholder="Mail"
                    className={`${inputClassNames}  border-1 ${errors.email ? "border-red-500" : ""}`}
                />
            </div>

            {isSignUp && (
                <>
                    {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
                    <input
                        {...register("firstName", { required: "First Name is required", maxLength: 20 })}
                        placeholder="First Name"
                        className="login-input"
                    />
                    {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
                    <input
                        {...register("lastName", { required: "Last Name is required", maxLength: 40 })}
                        placeholder="Last Name"
                        className="login-input"
                    />
                </>
            )}

            <div>
                <p className={`text-red-500 h-2 px-2 text-xs ${errors?.password ? "opacity-100" : "opacity-0"}`}>{errors?.password?.message}</p>
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must be at least 8 characters" },
                    })}
                    placeholder="••••••••••"
                    className={`${inputClassNames}  border-1 ${errors.password ? "border-red-500" : ""}`}
                />
            </div>

            {isSignUp && (
                <>
                    {errors.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            // Remove validate to prevent onBlur validation
                        })}
                        placeholder="Confirm Password"
                        className="login-input"
                    />
                </>
            )}

            <button type="submit" className={buttonClassNames}>
                {isSignUp ? "Sign up" : "Log ind"}
            </button>
        </form>
    );
}
