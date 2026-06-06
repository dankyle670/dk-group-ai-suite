import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index          = lazy(() => import("./pages/Index"));
const AISolutions    = lazy(() => import("./pages/AISolutions"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileDevelopment = lazy(() => import("./pages/MobileDevelopment"));
const DataSolutions  = lazy(() => import("./pages/DataSolutions"));
const DesignSolutions = lazy(() => import("./pages/DesignSolutions"));
const Pricing        = lazy(() => import("./pages/Pricing"));
const DKAgents       = lazy(() => import("./pages/DKAgents"));
const About          = lazy(() => import("./pages/About"));
const Contact        = lazy(() => import("./pages/Contact"));
const NotFound       = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
