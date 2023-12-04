import { armamentHaki, cinquerorHaki, observHaki } from '../../utils/constans';
import './haki.css'

export const HakiPage = () => {
    
    return (
        <div className='Haki dark:text-slate-50'>
            <div className="container">
                <h2 className='text-4xl mb-4 font-bold'>Haki:</h2>
                <p className='text-xl'>
                    <b className='text-2xl'>Haki</b> is a mysterious power that allows the user to utilize their own spiritual energy for various purposes. All living beings in the world are capable of learning Haki however, most people do not notice it or fail to awaken it. Haki users are common in the New World, rare in Paradise, and basically non-existent in the Four Blues.
                </p>
                <div className="types-haki">
                    <h2 className='text-2xl my-6 font-bold'>Types of Haki:</h2>
                    <div className="haki-box flex">
                        <p className='max-w-4xl mr-6'>
                            <b className='text-2xl'>Kenbunshoku Haki</b> (見聞色の覇気?, Observation Haki), which gives the user a sixth sense of the world around them, allowing them to sense the presence, strength, and emotions of other people, even if they are out of sight or far away. It also grants limited precognitive abilities, allowing the user to sense their opponents' intentions and predict their actions and attacks before they happen
                            <br />
                            - An advanced level of Kenbunshoku allows the user to actually foresee a short period into the future.
                        </p>
                        <div className="haki-images">
                            <img src={observHaki} alt="" />
                            <div>Luffy sensing his opponent's next attack with Kenbunshoku Haki.</div>
                        </div>
                    </div>
                    <div className="haki-box flex">
                        <p className='max-w-4xl mr-6'>
                            <b className='text-2xl'>Busoshoku Haki</b> (武装色の覇気?, Armament Haki), which allows the user to use their own spiritual energy as armor to defend against attacks, as well as make their own attacks more potent. It can also be used to bypass Devil Fruit defenses, such as Logia intangibility. A person can apply the armament to a section of their body, over their entire body, and even imbue it onto their weapons. A coating of Busoshoku will cause the coated area to turn a shiny black, and a particularly thick and powerful coating will have a flame-like pattern along its edge.
                            <br />
                            - An advanced level of Busoshoku allows the user to emit the armament a short distance without a medium.
                            <br />
                            - A higher grade of advanced Busoshoku allows the user to make the emitted armament flow into a target's body and destroy it from the inside out.
                        </p>
                        <div className="haki-images">
                            <img src={armamentHaki} alt="" />
                            <div>Luffy coating his arms with Busoshoku Haki.</div>
                        </div>
                    </div>
                    <div className="haki-box flex">
                        <p className='max-w-4xl mr-6'>
                            <b className='text-2xl'>Haoshoku Haki</b> (覇王色の覇気?, Conqueror's Haki), which grants the user the ability to unleash their own willpower to overpower the will of others. This results in victims being mentally overwhelmed by the user, with particularly weak-willed foes instantly losing consciousness. It can also apply pressure onto objects and damage them, a clash between two particularly strong Haoshoku users is capable of "splitting the heavens". Unlike the other types of Haki which can be learned by anyone, Haoshoku is rare ability that only one in several million people are born with the ability to use.
                            <br />
                            - An advanced level of Haoshoku allows the user to infuse their conquering spirit into their weapons and physical attacks, greatly augmenting their power. Only a small handful of the most powerful Haoshoku users are able to achieve this.
                            <br />
                            -Another advanced level of Haoshoku allows for the ability to manipulate one's aura or presence, which negates an opponent's ability to sense the user with Kenbunshoku Haki.
                        </p>
                        <div className="haki-images">
                            <img src={cinquerorHaki} alt="" />
                            <div>Luffy knocking out enemies with Haoshoku Haki.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}