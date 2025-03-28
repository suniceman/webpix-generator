
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SignaturePadProps {
  onSignatureComplete: (signatureData: string) => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSignatureComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [hasSigned, setHasSigned] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas properties
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    
    // Set the canvas width and height to match the displayed size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Clear the canvas to start
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    setCtx(context);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasSigned(true);
    
    if (!ctx) return;
    
    ctx.beginPath();
    
    // Get the coordinates based on event type
    let x, y;
    if ('touches' in e) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;
    
    // Get the coordinates based on event type
    let x, y;
    if ('touches' in e) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (!ctx) return;
    ctx.closePath();
  };

  const clearSignature = () => {
    if (!ctx || !canvasRef.current) return;
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setHasSigned(false);
  };

  const completeSignature = () => {
    if (!canvasRef.current || !hasSigned) return;
    
    const signatureData = canvasRef.current.toDataURL('image/png');
    onSignatureComplete(signatureData);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="border border-gray-300 rounded-md w-full mb-4">
        <canvas
          ref={canvasRef}
          className="w-full h-40 touch-none cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      <div className="flex gap-4">
        <Button 
          variant="outline"
          onClick={clearSignature}
        >
          清除签名
        </Button>
        <Button 
          disabled={!hasSigned} 
          onClick={completeSignature}
          className="bg-henkel-red hover:bg-henkel-red/90 text-white"
        >
          确认签名
        </Button>
      </div>
    </div>
  );
};

export default SignaturePad;
