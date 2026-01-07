'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { askConsultant } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Sparkles, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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
        { id: Date.now(), role: 'assistant', text: `Ocorreu um erro: ${state.error}. Por favor, tente novamente.` },
      ]);
    }
  }, [state]);
  
  const handleFormSubmit = (formData: FormData) => {
    const question = formData.get('question') as string;
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: question }]);
    dispatch(formData);
    setInput('');
  };
  
  return (
    <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Consultor IA</h1>
            <p className="text-muted-foreground mt-2">Faça uma pergunta e receba ajuda para sua jornada de renda online.</p>
        </div>
        <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
            <Card className="flex-1 flex flex-col">
                <CardContent className="flex-1 p-0">
                    <ChatMessages messages={messages} />
                </CardContent>
                <CardFooter className="p-4 border-t">
                    <div className="w-full">
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
                    </div>
                </CardFooter>
            </Card>
            <p className="text-xs text-center text-muted-foreground mt-2">
                IA Consultant por Renda Online Fácil. Respostas para fins educacionais.
            </p>
        </div>
    </div>
  );
}

function ChatMessages({ messages }: { messages: Message[] }) {
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
        <ScrollArea className="h-[400px] w-full" ref={scrollAreaRef}>
            <div className="p-4 md:p-6 space-y-6">
                {messages.map((message) => (
                    <div key={message.id} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                        {message.role === 'assistant' && (
                            <Avatar className="w-10 h-10 border-2 border-primary/50">
                                <AvatarFallback className='bg-primary/20'>
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </AvatarFallback>
                            </Avatar>
                        )}
                        <div className={cn(
                            "max-w-md p-4 rounded-2xl shadow-sm",
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
            </div>
        </ScrollArea>
    );
}