"use server";

import { formDataResolver } from "@/lib";
import { questionFormSchema } from "./types";

const MockAnswers = [
  `<h2 class="text-lg font-bold text-blue-600">The Dawn of Quantum Computing</h2>
  Quantum Computing represents a <span class="font-bold text-blue-600">paradigm shift</span> in our computational capabilities. By leveraging the principles of <span class="font-semibold text-red-500">quantum mechanics</span>, specifically <span class="font-semibold text-green-500">superposition and entanglement</span>, quantum computers use qubits to perform multiple calculations at once. This contrasts starkly with traditional computing's binary system, offering a glimpse into a future where complex problems can be solved in fractions of the time.<br /><br />
  <h2 class="text-lg font-bold text-purple-600">Potential Applications</h2>
  The potential applications of quantum computing are vast and transformative. In <span class="font-bold text-purple-600">drug discovery</span>, quantum computers can analyze molecular structures in unprecedented detail, accelerating the development of new medications. In <span class="font-bold text-purple-600">cryptography</span>, they promise to break current encryption methods, necessitating the development of quantum-resistant cryptography. Quantum computing also holds promise in <span class="font-bold text-purple-600">optimizing logistics</span>, improving climate models, and enhancing artificial intelligence.<br /><br />
  <h2 class="text-lg font-bold text-yellow-500">Challenges Ahead</h2>
  Despite its promise, quantum computing faces significant hurdles. <span class="font-semibold text-yellow-500">Quantum decoherence</span>, the tendency of qubits to lose their quantum properties, and the challenge of <span class="font-semibold text-yellow-500">error correction</span> in a quantum system, are major technical challenges. Additionally, the need for ultra-cold temperatures to maintain qubit states adds complexity and cost to quantum computing systems.<br /><br />
  <h2 class="text-lg font-bold text-green-600">The Quantum Race</h2>
  The race to achieve quantum supremacy is a global endeavor, with significant investments from both public and private sectors. Tech giants and startups alike are in a fierce competition to build the first truly practical quantum computer. This competition not only accelerates technological advancements but also highlights the strategic importance of quantum computing in national security and economic competitiveness.<br /><br />
  <h2 class="text-lg font-bold text-blue-600">Ethical Considerations</h2>
  As with any transformative technology, quantum computing raises important ethical considerations. The power to break current encryption standards could endanger privacy and security, while the advantages conferred by early access to quantum computing could exacerbate global inequalities. It's imperative for stakeholders to address these ethical challenges, ensuring that the benefits of quantum computing are shared equitably across society.<br /><br />
  <h2 class="text-lg font-bold text-purple-600">Looking Ahead</h2>
  The journey towards a quantum future is filled with both excitement and uncertainty. As we continue to unlock the mysteries of quantum mechanics and develop new technologies, the potential for quantum computing to solve some of humanity's most pressing challenges grows. However, realizing this potential will require not only technological innovation but also a concerted effort to address the ethical, security, and societal implications of this groundbreaking technology.  
  `,
  "I am another mock answer",
  "I am a third mock answer",
  "I am a fourth mock answer",
];

const mockAnswerFetch = async ({
  answerIndex,
  cb,
}: {
  answerIndex: number;
  cb?: (answer: string) => void;
}): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const answer = MockAnswers.at(answerIndex);
      cb?.(answer!);
      resolve(MockAnswers.at(answerIndex)!);
    }, 500);
  });
};

export const submitQuestion = async (
  formData: FormData,
): Promise<{ interviewAnswer: string; errors: Array<{ message: string }> }> => {
  console.log("formData", formData);
  const data = formDataResolver(formData, questionFormSchema);

  const errors = data?.errors || [];

  const interviewAnswer = await mockAnswerFetch({
    answerIndex: Number(data?.answerId!),
  });

  console.log("answerIndex", Number(data?.answerId!));

  return {
    interviewAnswer,
    errors,
  };
};
