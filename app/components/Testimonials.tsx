"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "김서연",
    role: "테크코프 CEO",
    image: "/placeholder.svg?height=400&width=400",
    quote: "스트림라인은 우리의 업무 흐름을 혁신했습니다. 직관적이고 강력하며, 팀의 생산성을 크게 향상시켰습니다.",
  },
  {
    name: "이준호",
    role: "그로스허브 마케팅 디렉터",
    image: "/placeholder.svg?height=400&width=400",
    quote: "스트림라인의 분석 기능은 우리에게 귀중한 인사이트를 제공했습니다. 마케팅 전략에 게임 체인저가 되었습니다.",
  },
  {
    name: "박지민",
    role: "이노베이트코 제품 관리자",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "스트림라인의 협업 도구는 우리 팀의 원격 작업을 원활하게 만들었습니다. 이제 일상 업무의 필수적인 부분이 되었습니다.",
  },
]

export default function Testimonials() {
  return (
    <div className="bg-secondary py-16 sm:py-24 relative overflow-hidden" id="testimonials">
      {/* Add background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-16 w-32 h-32 bg-primary-light rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-16 w-24 h-24 bg-secondary-light rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">전 세계 기업들이 신뢰하는 서비스</h2>
          <p className="mt-4 text-xl text-muted-foreground">스트림라인에 대한 만족한 고객들의 이야기를 들어보세요</p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-background border border-border shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

