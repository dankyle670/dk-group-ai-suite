import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AISolutions from "./pages/AISolutions";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import DataSolutions from "./pages/DataSolutions";
import DesignSolutions from "./pages/DesignSolutions";
import Pricing from "./pages/Pricing";
import DKAgents from "./pages/DKAgents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/data-solutions" element={<DataSolutions />} />
          <Route path="/design-solutions" element={<DesignSolutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dk-agents" element={<DKAgents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
