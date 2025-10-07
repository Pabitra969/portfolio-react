import React from 'react'
import Card from './Card'

const Projects = () => {

  const projects = [
    {
      title: "LLM-based Text Summarization System",
      body: "Built a tool to generate concise summaries from PDFs & text files with Q&A and question generation features, improving research document understanding speed by 65%.",
      link: "https://github.com/Pabitra969/Text-Summarizer.git"
    },

    {
      title: "Code Conversion Editor (LLaMA-3.2B)",
      body: "Trained a fine-tuned LLaMA-3.2B model for C++ to JAVA code conversion, achieving ~85% line mapping accuracy. Highlighted matching code lines with colour, reducing debugging time by 40% for students.",
      link: "https://github.com/Pabitra969/code_conversion_using_unsloth_Llama_3.2_3B_Instruct_model.git"
    },

    {
      title: "Dynamic Room Assignment & Management Tool",
      body: "Developed a smart allocation system that managed 100+ room assignments based on capacity. Optimized space utilization by 30%, minimizing manual allocation errors.",
      link: "https://github.com/Pabitra969/roomAllocation.git"
    }

  ]

  return (
    <>
      <div id="project" class="scroll-mt-30 max-sm:pl-10 md:pl-20 lg:pl-35 max-sm:pr-10 md:pr-20 lg:pr-35 lg:mb-30 mb-15" >
        <h1 class="text-2xl font-bold" >Projects</h1>
        <p class="pt-5">Here are a few projects I've worked on recently.</p>
        <div class="flex flex-wrap gap-10 mt-10">
          {projects.map((p, i) => (
            <Card key={i} title={p.title} body={p.body} link={p.link} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects