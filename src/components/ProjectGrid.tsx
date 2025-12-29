"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard 
        title="Placeholder" 
        description="A minimal task manager for focused work."
      />
      <ProjectCard 
        title="Placeholder" 
        description="A comprehensive UI kit for personal projects."
      />
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
    >
       <div className="flex flex-col h-full justify-between">
          <div>
             <h3 className="font-medium text-foreground">{title}</h3>
             <p className="mt-2 text-sm text-foreground/60">{description}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-foreground/40 group-hover:text-foreground/80 transition-colors">
            <span>View Project</span> <ArrowRight size={12} />
          </div>
       </div>
       <Link href="#" className="absolute inset-0" />
    </motion.div>
  );
}

