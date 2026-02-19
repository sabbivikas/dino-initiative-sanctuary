import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Hotlines from "./pages/Hotlines";
import OurStory from "./pages/OurStory";
import GetInvolved from "./pages/GetInvolved";
import Privacy from "./pages/Privacy";
import Quiz from "./pages/Quiz";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import VideoIntro from "./components/VideoIntro";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro && <VideoIntro onComplete={() => setShowIntro(false)} />}
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/hotlines" element={<Hotlines />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/report" element={<Report />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
