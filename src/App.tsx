/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  X,
  Maximize2
} from 'lucide-react';

// Constants
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=48996809760&text&type=phone_number&app_absent=0&utm_source=ig";
const INSTAGRAM_URL = "https://www.instagram.com/dentistadio/";
const EXPERT_NAME = "Dra. Diona Dresseno";
const LOCATION = "Av. Alm. Tamandaré, 94 - sala 408 - Coqueiros, Florianópolis - SC";

const GALLERY_IMAGES = [
  "https://i.imgur.com/S5HlNeE.png",
  "https://i.imgur.com/GNkDyqv.png",
  "https://i.imgur.com/GKR46bX.png",
  "https://i.imgur.com/0Vp2JmG.png",
  "https://i.imgur.com/No543BI.png",
  "https://i.imgur.com/pDYpzMp.png",
  "https://i.imgur.com/FsgpVkK.png",
  "https://i.imgur.com/rUJaFyx.png",
  "https://i.imgur.com/M45Q4xl.png",
  "https://i.imgur.com/cqnVa1w.png",
  "https://i.imgur.com/H0rfw20.png",
  "https://i.imgur.com/10cgWh4.png",
  "https://i.imgur.com/oUyj5Zp.png",
  "https://i.imgur.com/RMVe7py.png",
  "https://i.imgur.com/VC1ACHK.png",
  "https://i.imgur.com/MTijzIE.png"
];

const EXPERT_PHOTOS = [
  "https://i.imgur.com/sBW6KBy.png",
  "https://i.imgur.com/tvF6vPU.png"
];

// Components
const Button = ({ children, onClick, className = "", primary = true }: { children: React.ReactNode, onClick?: () => void, className?: string, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick || (() => window.open(WHATSAPP_URL, '_blank'))}
    className={`w-full py-4 px-6 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
      primary 
        ? "bg-[#25D366] text-white hover:bg-[#20ba5a]" 
        : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
    } ${className}`}
  >
    {children}
  </motion.button>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Lightbox = ({ isOpen, image, onClose }: { isOpen: boolean, image: string, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button 
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={onClose}
        >
          <X size={32} />
        </button>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={image}
          alt="Resultado"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-emerald-100">
      {/* 1. HERO */}
      <header className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_PHOTOS[0]} 
            alt={EXPERT_NAME}
            className="w-full h-full object-cover object-top md:object-center opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 pb-12 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
              Ortodontia & Estética Facial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 leading-[1.1]">
              Eu sou <span className="text-emerald-700">{EXPERT_NAME}</span>, sua dentista em Florianópolis.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Transformo sorrisos através de uma odontologia humana, moderna e focada no seu bem-estar. Recupere sua confiança com quem prioriza o seu conforto.
            </p>
            
            <div className="space-y-3">
              <Button>
                <MessageCircle size={22} />
                Agendar primeira consulta gratuita
              </Button>
              <p className="text-center text-sm text-gray-400 font-medium">
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={EXPERT_PHOTOS[1]} 
                alt="Dra. Diona Dresseno no consultório"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm font-bold">+500 Sorrisos</span>
              </div>
              <p className="text-xs text-gray-500">Transformados em Florianópolis</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Muito prazer, sou a Dra. Diona.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Acredito que um sorriso saudável vai muito além da estética. É sobre autoestima, saúde e a liberdade de se expressar sem medos. No meu consultório em Coqueiros, ofereço um atendimento exclusivo, onde você não é apenas mais um paciente, mas sim o centro de todo o cuidado.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Especialista em Ortodontia e Implantodontia",
                "Foco em Harmonização Orofacial e Estética",
                "Atendimento humanizado e sem pressa",
                "Tecnologia de ponta para tratamentos indolores"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="md:w-auto px-10">
              Falar diretamente comigo
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-[#F3F4F6]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resultados que inspiram</h2>
          <p className="text-gray-600">Veja algumas das transformações realizadas recentemente.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-8 italic">
          *Resultados podem variar de pessoa para pessoa. Imagens meramente ilustrativas de casos clínicos.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Por que escolher meu atendimento?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Minha prioridade é oferecer uma experiência tranquila, transparente e com resultados duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="text-emerald-600" size={32} />,
              title: "Avaliação Honesta",
              desc: "Sem tratamentos desnecessários. Apenas o que você realmente precisa para sua saúde."
            },
            {
              icon: <Heart className="text-emerald-600" size={32} />,
              title: "Atendimento Comigo",
              desc: "Você será atendido(a) diretamente por mim em todas as etapas do seu tratamento."
            },
            {
              icon: <Sparkles className="text-emerald-600" size={32} />,
              title: "Clareza Total",
              desc: "Explico cada detalhe do procedimento para que você se sinta seguro(a) e no controle."
            },
            {
              icon: <Star className="text-emerald-600" size={32} />,
              title: "Materiais Premium",
              desc: "Utilizo apenas as melhores marcas e tecnologias disponíveis no mercado mundial."
            },
            {
              icon: <MapPin className="text-emerald-600" size={32} />,
              title: "Localização Privilegiada",
              desc: "Consultório moderno e confortável no coração de Coqueiros, com fácil acesso."
            },
            {
              icon: <MessageCircle className="text-emerald-600" size={32} />,
              title: "Suporte Pós-Procedimento",
              desc: "Acompanhamento próximo para garantir que sua recuperação seja perfeita."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <div className="bg-emerald-900 py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto(a) para voltar a sorrir com confiança?</h2>
          <p className="text-emerald-100/80 text-lg mb-10">
            Não deixe para depois o cuidado que você merece hoje. Vamos conversar sobre o seu caso?
          </p>
          <Button className="md:w-auto px-12 bg-white text-emerald-900 hover:bg-emerald-50">
            <MessageCircle size={22} />
            Chamar no WhatsApp agora
          </Button>
        </div>
      </div>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Sua jornada para um novo sorriso</h2>
          <p className="text-gray-600">Simples, transparente e sem burocracia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-emerald-50 z-0" />
          {[
            {
              step: "01",
              title: "Contato Inicial",
              desc: "Clique no botão e me chame no WhatsApp. Minha equipe ou eu mesma te responderemos rapidamente."
            },
            {
              step: "02",
              title: "Agendamento",
              desc: "Escolhemos o melhor horário para você vir ao consultório em Coqueiros para sua avaliação gratuita."
            },
            {
              step: "03",
              title: "Avaliação Completa",
              desc: "Analisamos seu caso, tiramos suas dúvidas e montamos um plano de tratamento personalizado."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-emerald-200">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
          <p className="text-emerald-800 font-semibold text-lg">
            Lembrando: A primeira consulta é 100% gratuita e sem qualquer compromisso.
          </p>
        </div>
      </Section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <Section className="bg-[#FAFAFA]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ambiente e Cuidado</h2>
          <p className="text-gray-600">Conheça o espaço preparado para te receber.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden aspect-video shadow-lg">
            <img 
              src={EXPERT_PHOTOS[0]} 
              alt="Dra. Diona Dresseno" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video shadow-lg">
            <img 
              src={EXPERT_PHOTOS[1]} 
              alt="Consultório" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-white text-center">
        <div className="max-w-2xl mx-auto py-12">
          <h2 className="text-4xl font-bold mb-6">O seu melhor sorriso começa com um clique.</h2>
          <p className="text-xl text-gray-600 mb-10">
            Garanta sua vaga para uma avaliação gratuita e descubra como podemos transformar sua saúde bucal.
          </p>
          <div className="space-y-4">
            <Button className="h-16 text-xl">
              <MessageCircle size={24} />
              Quero minha consulta gratuita
            </Button>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-1 text-emerald-600 font-bold">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-sm text-gray-500 font-medium">Avaliação 5 estrelas no Google</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. RODAPÉ */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{EXPERT_NAME}</h3>
            <p className="text-gray-400 leading-relaxed">
              Ortodontia e Implantodontia | Aparelhos | Implantes | Harmonização Orofacial
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-emerald-500">Onde estamos</h4>
            <p className="text-gray-400 flex items-start gap-2">
              <MapPin size={20} className="shrink-0 text-emerald-500" />
              {LOCATION}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-emerald-500">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {EXPERT_NAME} • Todos os direitos reservados.</p>
          <p className="mt-2">CRO-SC: [Número do CRO]</p>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage || ""} 
        onClose={() => setSelectedImage(null)} 
      />
      
      {/* Floating WhatsApp Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle size={32} />
        </motion.a>
      </div>
    </div>
  );
}
