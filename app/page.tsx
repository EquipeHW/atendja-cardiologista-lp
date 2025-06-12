import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Heart,
  Clock,
  Shield,
  Phone,
  MapPin,
  Star,
  AlertTriangle,
  CheckCircle,
  Stethoscope,
  Activity,
  Users,
  Award,
  MessageCircle,
  Calendar,
  Zap,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function CardioLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/atendja.png"
              alt="Atend Já Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
            </div>
          </div>
        </div>
      </header>
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-r from-[#008B47] to-[#2EA55C] py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-oscine-bold text-white leading-tight">
                Cardiologista em <span className="text-white">Feira de Santana</span>
              </h1>

              <p className="text-lg md:text-xl font-oscine-regular text-white leading-relaxed">
                Na <strong className="font-oscine-bold">Atend Já Feira de Santana</strong>, você faz todos os exames do coração em um só lugar, com
                equipamentos modernos e resultados rápidos – <strong className="font-oscine-bold">sem plano de saúde</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-[#008B47] px-8 py-4 text-lg font-oscine-bold" asChild>
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-end">
              <Image
                src="/medicobanner.png"
                alt="Médico cardiologista"
                width={500}
                height={500}
                className="rounded-3xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Exames Cardíacos Section */}
      <section id="exames" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oscine-bold text-gray-900 mb-4">
              Descubra Como Está Seu Coração com Nossos Exames:
            </h2>
            <div className="bg-[#8DBF44]/10 border border-[#8DBF44] rounded-lg p-4 inline-block">
              <p className="text-[#008B47] font-semibold flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                ⚠️ Dor no peito ou palpitações? Agende hoje mesmo!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 hover:border-[#8DBF44] transition-colors">
              <CardHeader className="text-center">
                <Activity className="w-12 h-12 text-[#008B47] mx-auto mb-2" />
                <CardTitle className="text-xl font-oscine-bold">Eletrocardiograma (ECG)</CardTitle>
                <CardDescription>Detecta arritmias e infartos silenciosos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-[#008B47] hover:bg-[#2EA55C] text-white font-oscine-bold" asChild>
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8DBF44] transition-colors">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-[#008B47] mx-auto mb-2" />
                <CardTitle className="text-xl font-oscine-bold">Teste Ergométrico</CardTitle>
                <CardDescription>Avaliação durante esforço físico</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-[#008B47] hover:bg-[#2EA55C] text-white font-oscine-bold" asChild>
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8DBF44] transition-colors">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-[#008B47] mx-auto mb-2" />
                <CardTitle className="text-xl font-oscine-bold">Holter 24h</CardTitle>
                <CardDescription>Monitoramento contínuo do ritmo cardíaco</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-[#008B47] hover:bg-[#2EA55C] text-white font-oscine-bold" asChild>
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8DBF44] transition-colors">
              <CardHeader className="text-center">
                <Stethoscope className="w-12 h-12 text-[#008B47] mx-auto mb-2" />
                <CardTitle className="text-xl font-oscine-bold">Ecocardiograma</CardTitle>
                <CardDescription>Ultrassom do coração com Doppler</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-[#008B47] hover:bg-[#2EA55C] text-white font-oscine-bold" asChild>
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#008B47] to-[#2EA55C] text-white p-6 rounded-lg text-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#008B47] px-8 py-4 text-lg font-oscine-bold" asChild>
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sinais de Alerta Section */}
      <section className="py-16 bg-gradient-to-br bg-gradient-to-r from-[#008B47] to-[#2EA55C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oscine-bold text-white mb-4">Você Tem Algum Desses Sintomas?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              "Falta de ar ao fazer pequenos esforços",
              "Dor no peito que irradia para o braço",
              "Palpitações ou batimentos irregulares",
              "Tonturas frequentes",
            ].map((sintoma, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#008B47]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#008B47] flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-oscine-bold">{sintoma}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#008B47] px-8 py-4 text-lg font-oscine-bold" asChild>
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oscine-bold text-gray-900 mb-4">
              Por que escolher a Atend Já?
            </h2>
            <p className="text-lg text-gray-600 font-oscine-regular">
              Somos referência em cardiologia em Feira de Santana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-[#008B47]" />
              </div>
              <h3 className="text-xl font-oscine-bold mb-2">Cardiologista no Local</h3>
              <p className="text-gray-600 font-oscine-regular">Consulta e exames no mesmo dia</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#008B47]" />
              </div>
              <h3 className="text-xl font-oscine-bold mb-2">Resultados em 24h</h3>
              <p className="text-gray-600 font-oscine-regular">Laudos digitais ou impressos</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#008B47]" />
              </div>
              <h3 className="text-xl font-oscine-bold mb-2">Equipamentos de Ponta</h3>
              <p className="text-gray-600 font-oscine-regular">Marcas como Philips e Welch Allyn</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#008B47]" />
              </div>
              <h3 className="text-xl font-oscine-bold mb-2">Preços Populares</h3>
              <p className="text-gray-600 font-oscine-regular">ECG por menos de R$ 100</p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oscine-bold text-gray-900 mb-4">
              Pacientes que Confiaram em Nossos Cardiologistas:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Descobri minha arritmia aqui e hoje estou controlado. Salvou minha vida!"
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Paciente satisfeito"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-gray-500">Paciente há 2 anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Atendimento rápido e preço justo. Finalmente achei uma clínica séria!"
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Paciente satisfeito"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-gray-500">Paciente há 1 ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oscine-bold text-gray-900 mb-4">
              Perguntas Frequentes Sobre Exames do Coração:
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Preciso de pedido médico para fazer ECG?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim, mas nossos clínicos podem emitir na hora. Você não precisa se preocupar com burocracia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  O Holter atrapalha meu dia a dia?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não! É um pequeno gravador portátil que você usa normalmente durante suas atividades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Exames detectam risco de infarto?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim, identificamos fatores de risco precocemente, permitindo prevenção eficaz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#008B47] hover:bg-[#2EA55C] text-white px-8 py-4 text-lg font-oscine-bold" asChild>
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#3b3f3d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/atendjabranco.png"
                alt="Atend Já Logo"
                width={150}
                height={50}
                className="mb-4"
              />
             
              <p className="text-gray-300 mb-4">Cuidamos do seu coração com atenção, tecnologia e preços acessíveis.</p>
            
            </div>

            <div>
              <h4 className="text-lg font-oscine-bold mb-4">Horário de Funcionamento</h4>
              <p className="text-gray-300">Segunda a Sábado</p>
              <p className="text-gray-300">das 6h às 20h</p>
              <p className="text-sm text-gray-400 mt-2">Horário estendido para trabalhadores</p>
            </div>

        

            <div>
              <h3 className="text-lg font-oscine-bold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-oscine-regular">© 2025 Atend Já Feira de Santana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

  
    </div>
  )
}
