'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { askConsultant } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Sparkles, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending} className="shrink-0">
      {pending ? (
        <Sparkles className="h-5 w-5 animate-spin" />
      ) : (
        <Send className="h-5 w-5" />
      )}
      <span className="sr-only">Enviar</span>
    </Button>
  );
}

export default function IAConsultantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'Olá! Eu sou o Milvan, seu consultor de renda online. Como posso te ajudar a ganhar dinheiro hoje?',
    },
  ]);
  const [input, setInput] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialState = { data: null, error: null };
  const [state, dispatch] = useFormState(askConsultant, initialState);

  useEffect(() => {
    if (state.data?.answer) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'assistant', text: state.data.answer },
      ]);
    } else if (state.error) {
       setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'assistant', text: "Ocorreu um erro. Por favor, tente novamente." },
      ]);
    }
  }, [state]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFormSubmit = (formData: FormData) => {
    const question = formData.get('question') as string;
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: question }]);
    dispatch(formData);
    setInput('');
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] bg-gray-50 dark:bg-gray-900">
       <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {messages.map((message) => (
                <div key={message.id} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                    {message.role === 'assistant' && (
                        <Avatar className="w-10 h-10 border-2 border-primary/50">
                            <div className="relative w-full h-full">
                                <Image src="/LOGO_DRESBACH_500-removebg-preview.png" alt="Milvan IA" layout="fill" objectFit="cover" />
                            </div>
                        </Avatar>
                    )}
                    <div className={cn(
                        "max-w-md md:max-w-lg lg:max-w-xl p-4 rounded-2xl shadow-sm",
                        message.role === 'user' 
                            ? "bg-primary text-primary-foreground rounded-br-none" 
                            : "bg-background text-foreground rounded-bl-none border"
                    )}>
                        <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                     {message.role === 'user' && (
                        <Avatar className="w-10 h-10 bg-muted border">
                            <AvatarFallback>
                                <User className="w-5 h-5 text-muted-foreground" />
                            </AvatarFallback>
                        </Avatar>
                    )}
                </div>
            ))}
             <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-background border-t">
            <div className="max-w-2xl mx-auto">
                 <form
                    ref={formRef}
                    action={handleFormSubmit}
                    className="flex items-center gap-2"
                    >
                    <Input
                        name="question"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite sua dúvida aqui..."
                        className="flex-1"
                        autoComplete="off"
                    />
                    <SubmitButton />
                </form>
                <p className="text-xs text-center text-muted-foreground mt-2">
                    IA Consultant por Renda Online Fácil. Respostas para fins educacionais.
                </p>
            </div>
        </div>
    </div>
  );
}
