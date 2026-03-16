import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { animated } from 'react-spring';
import { useAuth } from '../../../context/AuthContext';
import { useBoop } from '../../../hooks/useBoop';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import { VisuallyHidden } from '../../../components/ui/VisuallyHidden';

export default function PdfVerificationScreen() {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [boopStyle, triggerBoop] = useBoop({ x: 5, timing: 200 });

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newPin = [...pin];
    newPin[index] = value.substring(value.length - 1);
    setPin(newPin);
    setError(false);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const fullPin = pin.join('');
    if (fullPin.length !== 4) return;

    setIsVerifying(true);
    // Simulate network delay for better UX
    await new Promise(r => setTimeout(r, 600));

    const success = login(fullPin);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError(true);
      setPin(['', '', '', '']);
      inputRefs.current[0]?.focus();
      setIsVerifying(false);
    }
  };

  // Auto-submit when 4 digits are entered
  useEffect(() => {
    if (pin.every(digit => digit !== '')) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div 
        className={`max-w-md w-full backdrop-blur-xl bg-white/70 border border-slate-200/50 shadow-2xl rounded-3xl p-8 relative overflow-hidden transition-all duration-300 ${error ? 'ring-2 ring-red-400/50' : ''}`}
        style={prefersReducedMotion ? {} : { isolation: 'isolate' }}
      >
        {/* Soft diffused glow background */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-slate-100/50 to-[#cdfc4e]/10 -z-10 blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-[#4d7c0f]/10 text-[#4d7c0f] rounded-2xl flex items-center justify-center shadow-sm border border-[#4d7c0f]/20">
            {isVerifying ? (
              <ShieldCheck className="w-8 h-8 animate-pulse" />
            ) : (
              <Lock className="w-8 h-8" />
            )}
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Secure Document Access
            </h1>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Please enter your 4-digit PIN to verify your identity and access the document.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-8">
            <div className="flex justify-center gap-3">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  disabled={isVerifying}
                  className={`w-14 h-16 text-center text-2xl font-medium rounded-xl border-2 bg-white/50 focus:bg-white outline-none transition-all duration-200 
                    ${error 
                      ? 'border-red-300 text-red-600 focus:border-red-400 focus:ring-4 focus:ring-red-100/50' 
                      : 'border-slate-200 text-slate-900 focus:border-[#4d7c0f] focus:ring-4 focus:ring-[#cdfc4e]/30'
                    }
                    ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>

            <div className="h-6 flex items-center justify-center">
              {error && (
                <p className="text-sm font-medium text-red-500 flex items-center gap-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                  <AlertCircle className="w-4 h-4" />
                  Incorrect PIN entered.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isVerifying || pin.includes('')}
              onMouseEnter={triggerBoop}
              className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              <span>{isVerifying ? 'Verifying...' : 'Access Document'}</span>
              {!isVerifying && (
                <animated.div style={prefersReducedMotion ? {} : boopStyle}>
                  <ArrowRight className="w-4 h-4" />
                </animated.div>
              )}
              <VisuallyHidden>{isVerifying ? 'Verifying your PIN' : 'Submit PIN'}</VisuallyHidden>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
