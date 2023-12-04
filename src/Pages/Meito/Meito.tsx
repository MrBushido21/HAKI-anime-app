import { GradeBlades, GreatGrade, SkillfulGrade, SupremeGrade, Ungraded, UnknownGrade } from '../../utils/constans'
import { MeitoContainer } from './MeitoContainer'
import './meito.css'


export const Meito = () => {

    const SupremeGard = SupremeGrade
    const GreatGard = GreatGrade
    const SkillfulGrad = SkillfulGrade
    const GradeBlade = GradeBlades
    const UnknownGrad = UnknownGrade
    const Ungrade = Ungraded

    return (
        <div className="container">
            <div className='dark: text-white'>
                <h2 className='text-white text-4xl'>Meito</h2>
                <p className='mt-4 dark:text-white'><span className='font-bold '>Meito</span> is a term for a blade which has been given a name. These blades are typically quite famous and powerful and are ranked by the grade of their quality. While most Meito are swords, a great variety of blades fall under this term, as well as non-bladed melee weapons including polearms and clubs.</p>

                <div className='meitos mt-16'>
                    <h3 className='font-bold text-white text-2xl'>Meito</h3>
                    <div className='title border my-4 text-xl'>Supreme Grade Blades</div>
                    <MeitoContainer meitos={SupremeGard}/>
                    <div className='title border my-4 text-xl'>Great Grade Blades</div>
                    <MeitoContainer meitos={GreatGard}/>
                    <div className='title border my-4 text-xl'>Skillful Grade Blades</div>
                    <MeitoContainer meitos={SkillfulGrad}/>
                    <div className='title border my-4 text-xl'>Grade Blades</div>
                    <MeitoContainer meitos={GradeBlade}/>
                    <div className='title border my-4 text-xl'>Unknown Grade Blades</div>
                    <MeitoContainer meitos={UnknownGrad}/>
                    <div className='title border my-4 text-xl'>Ungraded</div>
                    <MeitoContainer meitos={Ungrade}/>
                </div>
            </div>
        </div>
    );
}