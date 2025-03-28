
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Schwarzkopf from "./pages/Schwarzkopf";
import Syoss from "./pages/Syoss";
import SchwarzkopfPro from "./pages/SchwarzkopfPro";
import ShiseidoPro from "./pages/ShiseidoPro";
import Vidal from "./pages/Vidal";
import HomeCare from "./pages/HomeCare";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/schwarzkopf" element={<Schwarzkopf />} />
          <Route path="/syoss" element={<Syoss />} />
          <Route path="/schwarzkopf-pro" element={<SchwarzkopfPro />} />
          <Route path="/shiseido-pro" element={<ShiseidoPro />} />
          <Route path="/vidal" element={<Vidal />} />
          <Route path="/home-care" element={<HomeCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
