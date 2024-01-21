'use client';

import React, { useState } from 'react';
import { Button } from '@/components/common';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const variants = {
    expanded: { height: 'auto', opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  return (
    <Button
      isUnstyled
      onClick={() => setShowAnswer(!showAnswer)}
      className="flex justify-between border-b-2 border-primary pb-2 [&>]:flex-1"
    >
      <div className="text-left">
        <p className="text-sm font-bold md:text-base">{question}</p>
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              key="answer-container"
              className="ml-2 mt-4 text-sm md:ml-4 md:text-sm"
              variants={variants}
              initial="collapsed"
              animate={showAnswer ? 'expanded' : 'collapsed'}
              exit="collapsed"
              transition={{ duration: 0.15, ease: 'easeIn' }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="ml-1 md:ml-3">
        {showAnswer ? (
          <MdKeyboardArrowUp size={30} />
        ) : (
          <MdKeyboardArrowDown size={30} />
        )}
      </div>
    </Button>
  );
};

export default Question;
