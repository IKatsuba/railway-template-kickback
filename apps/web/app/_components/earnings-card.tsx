'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nxnext/ui/card';

import { DollarSign, Download, TrendingUp } from 'lucide-react';

import { Props } from '../types';

export default function EarningsCard({ userTemplates }: Props) {
  const totalEarnings = userTemplates.reduce((acc, template) => acc + template.totalPayout, 0);
  const totalProjects = userTemplates.reduce((acc, template) => acc + template.projects, 0);
  const totalActiveProjects = userTemplates.reduce(
    (acc, template) => acc + template.activeProjects,
    0,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Total Earnings</CardTitle>
        <CardDescription>Your template sales performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <h3 className="text-2xl font-bold">
                {totalEarnings.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Downloads</p>
              <h3 className="text-2xl font-bold">{totalProjects.toLocaleString()}</h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
              <h3 className="text-2xl font-bold">{totalActiveProjects.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}