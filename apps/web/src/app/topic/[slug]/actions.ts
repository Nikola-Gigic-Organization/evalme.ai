"use server";

import { formDataResolver, apolloClient } from "@/lib";
import { questionFormSchema } from "./types";
import { CreateUserAnswerDocument } from "@/gql/graphql";

const MockAnswers = [
  `<span class="text-xl font-bold text-blue-600">The Dawn of Quantum Computing</span>
  Quantum Computing represents a <span class="font-bold text-blue-600">paradigm shift</span> in our computational capabilities. By leveraging the principles of <span class="font-semibold text-red-500">quantum mechanics</span>, specifically <span class="font-semibold text-green-500">superposition and entanglement</span>, quantum computers use qubits to perform multiple calculations at once. This contrasts starkly with traditional computing's binary system, offering a glimpse into a future where complex problems can be solved in fractions of the time.<br />
  <code class="border border-black p-2">const qubit = superposition + entanglement;</code><br />
  <span class="text-xl font-bold text-purple-600">Potential Applications</span>
  The potential applications of quantum computing are vast and transformative. In <span class="font-bold text-purple-600">drug discovery</span>, quantum computers can analyze molecular structures in unprecedented detail, accelerating the development of new medications. In <span class="font-bold text-purple-600">cryptography</span>, they promise to break current encryption methods, necessitating the development of quantum-resistant cryptography. Quantum computing also holds promise in <span class="font-bold text-purple-600">optimizing logistics</span>, improving climate models, and enhancing artificial intelligence.<br />
  <span class="text-xl font-bold text-yellow-500">Challenges Ahead</span>
  Despite its promise, quantum computing faces significant hurdles. <span class="font-semibold text-yellow-500">Quantum decoherence</span>, the tendency of qubits to lose their quantum properties, and the challenge of <span class="font-semibold text-yellow-500">error correction</span> in a quantum system, are major technical challenges. Additionally, the need for ultra-cold temperatures to maintain qubit states adds complexity and cost to quantum computing systems.<br />
  <span class="text-xl font-bold text-green-600">The Quantum Race</span>
  The race to achieve quantum supremacy is a global endeavor, with significant investments from both public and private sectors. Tech giants and startups alike are in a fierce competition to build the first truly practical quantum computer. This competition not only accelerates technological advancements but also highlights the strategic importance of quantum computing in national security and economic competitiveness.<br />
  <span class="text-xl font-bold text-blue-600">Ethical Considerations</span>
  As with any transformative technology, quantum computing raises important ethical considerations. The power to break current encryption standards could endanger privacy and security, while the advantages conferred by early access to quantum computing could exacerbate global inequalities. It's imperative for stakeholders to address these ethical challenges, ensuring that the benefits of quantum computing are shared equitably across society.<br />
  <span class="text-xl font-bold text-purple-600">Looking Ahead</span>
  The journey towards a quantum future is filled with both excitement and uncertainty. As we continue to unlock the mysteries of quantum mechanics and develop new technologies, the potential for quantum computing to solve some of humanity's most pressing challenges grows. However, realizing this potential will require not only technological innovation but also a concerted effort to address the ethical, security, and societal implications of this groundbreaking technology.  
  `,
];

const mockOpenAIAnswerFetch = async ({
  cb,
}: {
  cb?: (answer: string) => void;
}): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const answer = MockAnswers.at(0);
      cb?.(answer!);
      resolve(MockAnswers.at(0)!);
    }, 500);
  });
};

export const submitQuestion = async (
  formData: FormData,
): Promise<{ openAIAnswer: string; errors: Array<{ message: string }> }> => {
  const data = formDataResolver(formData, questionFormSchema);

  const errors = data?.errors || [];

  const openAIAnswer = await mockOpenAIAnswerFetch({});

  if (errors.length === 0) {
    // const user = await apolloClient.query({
    //   query: CheckAuthDocument,
    // });

    // console.log("user", user.data?.meUser);

    // if (user.data?.meUser?.user?.id) {
    await apolloClient.mutate({
      mutation: CreateUserAnswerDocument,
      variables: {
        data: {
          user: {
            connect: {
              id: "clutood670000xrn8tbb6ggfa",
            },
          },
          answer: data?.userAnswer ?? "",
          question: {
            connect: {
              id: data?.questionId,
            },
          },
        },
      },
    });
  }
  // }

  return {
    openAIAnswer,
    errors,
  };
};
