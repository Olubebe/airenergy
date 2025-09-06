import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AIRENERGY
            </span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Sign in to AIRENERGY
            </h1>
            <p className="text-gray-600 text-sm">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Sign in form */}
          <LoginButton />
          {/* Footer links */}

          {/* Terms */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our{" "}
              <button className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Branding/Info */}
      <div className="hidden lg:flex flex-1 bg-gray-50 items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Real-time Energy Monitoring
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Monitor your energy consumption in real-time, optimize usage
            patterns, and reduce costs with AI-powered insights.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Live Dashboard</h3>
                <p className="text-sm text-gray-600">
                  Track energy usage across all your devices
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Smart Alerts</h3>
                <p className="text-sm text-gray-600">
                  Get notified of unusual consumption patterns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-900">Cost Optimization</h3>
                <p className="text-sm text-gray-600">
                  AI recommendations to reduce energy costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
