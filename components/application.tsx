import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

// Card Component
export const Card: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        'bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

// CardHeader Component
export const CardHeader: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        'border-b border-gray-200 dark:border-gray-600 p-4 flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

// CardTitle Component
export const CardTitle: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={classNames(
        'text-lg font-semibold text-gray-800 dark:text-white',
        className
      )}
    >
      {children}
    </h3>
  );
};

// CardContent Component
export const CardContent: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={classNames('p-4 flex flex-col items-center justify-center text-center', className)}>{children}</div>;
};

export default function Application() {
  return (
    <section className="w-full -mt-32 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Application for Oracle Internship
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Showcasing my qualifications and interest in the Oracle internship
            opportunity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CV</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm/relaxed">
                My comprehensive curriculum vitae, highlighting my education,
                skills, and relevant experience.
              </p>
              <div className="mt-4">
                <a className='text-white bg-gray-900 hover:bg-gray-950 py-1 px-3 rounded-md outline-none dark:bg-white dark:bg-opacity-10' href="/IlyasElMabrouki.pdf" download target="_blank">
                  Download CV
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm/relaxed">
                A personalized cover letter expressing my enthusiasm and fit for
                the Oracle internship.
              </p>
              <div className="mt-4">
                <a className='text-white bg-gray-900 hover:bg-gray-950 py-1 px-3 rounded-md outline-none dark:bg-white dark:bg-opacity-10' href="/cover_letter.pdf" download target="_blank">
                  Download Cover Letter
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn Post</CardTitle>
            </CardHeader>
            <CardContent>
              <p  className="text-sm/relaxed">
                A link to the Oracle internship post on my LinkedIn profile,
                showcasing my interest and engagement.
              </p>
              <div className="mt-4">
                <a
                  className='text-white bg-gray-900 hover:bg-gray-950 py-1 px-3 rounded-md outline-none dark:bg-white dark:bg-opacity-10' 
                  href="https://www.linkedin.com/posts/el-mehdi-sekkouri-alaoui-88112767_oracle-morocco-research-activity-7165661034605719552-t7b_?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  View LinkedIn Post
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
