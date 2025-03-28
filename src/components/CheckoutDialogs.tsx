
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import SignaturePad from './SignaturePad';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface CheckoutDialogsProps {
  total: number;
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const CheckoutDialogs: React.FC<CheckoutDialogsProps> = ({
  total,
  items,
  open,
  onOpenChange,
  onConfirm
}) => {
  const navigate = useNavigate();
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  
  const handleConfirmOrder = () => {
    onOpenChange(false);
    setShowPrivacyDialog(true);
  };
  
  const handleSignatureComplete = (signatureData: string) => {
    setSignature(signatureData);
  };
  
  const handleFinalConfirm = () => {
    if (!signature) {
      toast.error('请完成签名');
      return;
    }
    
    // Generate PDF
    generatePDF();
    
    // Complete the order process
    setShowPrivacyDialog(false);
    onConfirm();
    
    // Show success message and navigate to orders page
    toast.success('订单已提交，协议已生成');
    navigate('/orders');
  };
  
  const generatePDF = () => {
    // Create new PDF document
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(18);
    doc.text('Henkel 购买协议', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text('订单详情:', 20, 40);
    
    let yPos = 50;
    items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} x ${item.quantity} = ¥ ${item.price * item.quantity}`, 25, yPos);
      yPos += 10;
    });
    
    doc.text(`总计: ¥ ${total}`, 20, yPos + 10);
    
    doc.text('隐私条款与协议', 20, yPos + 30);
    doc.setFontSize(10);
    doc.text('本协议由您与Henkel共同签署。您同意遵守我们的隐私政策和商业条款，', 20, yPos + 40);
    doc.text('包括但不限于交付、退款和产品质量保证等条款。', 20, yPos + 50);
    
    // Add signature
    if (signature) {
      doc.text('客户签名:', 20, yPos + 70);
      doc.addImage(signature, 'PNG', 20, yPos + 80, 60, 30);
    }
    
    // Add date
    const today = new Date();
    doc.text(`日期: ${today.toLocaleDateString()}`, 20, yPos + 120);
    
    // Save the PDF
    doc.save('henkel-purchase-agreement.pdf');
  };
  
  return (
    <>
      {/* Confirm Order Dialog */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>确认订单</DialogTitle>
            <DialogDescription>
              请确认您的订单详情和优惠福利
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <h3 className="font-medium mb-2">订单商品</h3>
            <div className="space-y-2 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>¥ {item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>总计</span>
                <span className="text-henkel-red">¥ {total}</span>
              </div>
            </div>
            
            <h3 className="font-medium mb-2">本次订单专享优惠</h3>
            <div className="space-y-2 bg-red-50 p-3 rounded-md">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-henkel-red flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">购满¥500享受免费配送</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-henkel-red flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">首次订购可获得10%的折扣优惠</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-henkel-red flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">赠送施华蔻专业护发体验装一份</span>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button 
              className="bg-henkel-red hover:bg-henkel-red/90 text-white"
              onClick={handleConfirmOrder}
            >
              确认下单
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy and Signature Dialog */}
      <AlertDialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>隐私条款</AlertDialogTitle>
            <AlertDialogDescription>
              请仔细阅读以下隐私条款，并在下方签名确认。
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="max-h-[200px] overflow-y-auto border rounded-md p-4 my-4 text-sm">
            <p className="mb-2">尊敬的客户：</p>
            <p className="mb-2">感谢您选择Henkel的产品和服务。在您继续使用我们的服务之前，我们希望您了解我们如何收集、使用和保护您的个人信息。</p>
            <p className="mb-2">1. <strong>信息收集</strong>：我们会收集您提供给我们的信息，例如姓名、联系方式、地址、支付信息等。</p>
            <p className="mb-2">2. <strong>信息使用</strong>：我们使用您的信息来处理订单、提供客户服务、改进我们的产品和服务，以及在某些情况下进行营销活动。</p>
            <p className="mb-2">3. <strong>信息共享</strong>：我们不会出售您的个人信息。我们可能会与我们的业务合作伙伴分享信息，以便提供您所请求的服务。</p>
            <p className="mb-2">4. <strong>信息安全</strong>：我们采取各种安全措施来保护您的个人信息不被未经授权的访问或披露。</p>
            <p className="mb-2">5. <strong>您的权利</strong>：您有权访问、更正或删除您的个人信息，以及在某些情况下限制或反对我们处理您的信息。</p>
            <p>通过在下方签名，您确认您已阅读并同意我们的隐私政策和商业条款。</p>
          </div>
          
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">请在下方用正楷签名：</p>
            <SignaturePad onSignatureComplete={handleSignatureComplete} />
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              className="bg-henkel-red hover:bg-henkel-red/90 text-white"
              onClick={handleFinalConfirm}
            >
              确认并完成下单
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CheckoutDialogs;
