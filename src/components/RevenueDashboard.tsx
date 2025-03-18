
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { DollarSign, TrendingUp, BarChart3, Building, ShoppingCart } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { Card, CardContent } from './ui/card';

interface RevenueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  amount: string;
  highlight: string;
}

const RevenueItem = ({ icon, title, description, amount, highlight }: RevenueItemProps) => {
  const itemRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  
  return (
    <div ref={itemRef} className="reveal-text">
      <Card className="h-full glass-card border-primary/10 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-foreground/70 text-sm">{description}</p>
              <div className="pt-2">
                <span className="text-2xl font-bold text-primary">{amount}</span>
                <p className="text-sm text-foreground/70 mt-1">{highlight}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const RevenueDashboard = () => {
  const titleRef = useScrollReveal<HTMLDivElement>();
  
  return (
    <section className="py-20 relative overflow-hidden dark-gradient-bg">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-90"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div ref={titleRef} className="reveal-text mb-12 text-center">
          <SectionTitle 
            subtitle="Financial Impact" 
            title="Revenue & Business Growth" 
            align="center" 
          />
          <p className="max-w-2xl mx-auto text-foreground/70 mt-4">
            Driving measurable business results and financial outcomes throughout my career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RevenueItem 
            icon={<DollarSign className="h-6 w-6" />}
            title="Education Platform"
            description="At Xsolla"
            amount="$10,000"
            highlight="Value per game studio for education platform courses"
          />
          
          <RevenueItem 
            icon={<BarChart3 className="h-6 w-6" />}
            title="Funding Dashboard"
            description="At Xsolla"
            amount="$20 million"
            highlight="(MYR 94 million) tracked in funding revenue as of Nov 2023"
          />
          
          <RevenueItem 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Government Tax Revenue"
            description="At SICPA"
            amount="$2.7 billion"
            highlight="Helped Philippine government collect in taxes through fuel marking"
          />
          
          <RevenueItem 
            icon={<Building className="h-6 w-6" />}
            title="Brownfield Projects"
            description="At Technip"
            amount="RM 2.9 million"
            highlight="Executed 3 projects with RM 500,000 net profit (17% above average)"
          />
          
          <RevenueItem 
            icon={<ShoppingCart className="h-6 w-6" />}
            title="E-commerce GMV"
            description="At 11street.my"
            amount="MYR 2 million"
            highlight="Daily GMV from online promotions within 2 years of establishment"
          />
          
          <div className="hidden lg:block">
            <Card className="h-full glass-card border-primary/20 bg-primary/5">
              <CardContent className="flex items-center justify-center h-full p-6">
                <div className="text-center">
                  <DollarSign className="h-12 w-12 text-primary/40 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-primary/80">Proven Track Record</h3>
                  <p className="text-sm text-foreground/70 mt-2">
                    Consistently driving significant financial impact across industries
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueDashboard;
