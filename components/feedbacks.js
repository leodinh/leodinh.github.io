import Feedback from './feedback';

const recommendations = [
    {
        name: 'Dhruvin Parikh',
        relate: 'CTO at OptyFi',
        feedback:
            'Leo is a highly skilled full-stack blockchain developer who consistently delivers excellent results. He is a valuable asset to any team seeking expertise across front-end, back-end, and on-chain business logic.'
    },
    {
        name: 'Deepanshu Gupta',
        relate: 'Former colleague at OptyFi',
        feedback:
            'Leo has a deep understanding of blockchain technology and strong skills in building web products. He picks up new technology quickly, delivers high-quality work, and contributes valuable insights to the team.'
    },
    {
        name: 'Nima Ghazanfari',
        relate: 'Former colleague at OptyFi',
        feedback:
            'Leo consistently delivers valuable solutions to complex challenges. His commitment to excellence, strong programming background, and willingness to help others make him a remarkable colleague.'
    }
];

function Feedbacks() {
    return (
        <section className="section-shell" aria-labelledby="recommendations-title">
            <div className="max-w-2xl">
                <span className="ui-badge mb-4">Recommendations</span>
                <h2 id="recommendations-title" className="section-title">
                    Trusted by people I have built alongside
                </h2>
                <p className="mt-4 text-muted dark:text-muted-dark">
                    A few words from former teammates, adapted from recommendations shared on
                    LinkedIn.
                </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((recommendation) => (
                    <Feedback key={recommendation.name} {...recommendation} />
                ))}
            </div>
        </section>
    );
}

export default Feedbacks;
