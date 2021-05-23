import React from 'react';
import clown from '../../images/clown.jpg';
import './description.css';

const Clown = () => {
    return ( 
        <div className="container">

           <div className="img-container">
                 <img className="main-img" src={clown} alt="masqaraboz" />
           </div>
           <div className="description">
                <h1>Masqaraboz</h1>
               <p>Yorqin ranglardan foydalanib masqaraboz qiyofasini tasvirlashga intilgan rassom uni asar markaziga joylashtirish orqali unga o'ziga xos muvozanat baxsh etadi. 

                    Asarda shunday g'oya ilgari surilganki, ayrim tomoshabinlar buni kartinaga bir qarashda anglay olmaydilar. Rassom asar mohiyatini yanada ochish uchun qo'shimcha detallardan foydalangan. Narvon olg'a intilish yuqoriga harakatlanish manosida qo'llanilgan. Masqaraboz o'z kasbi bo'yicha narvonning eng yuqorisiga chiqqan, eng baland cho'qqini zabd etgan. Ammo shunga qaramay u masqarabozligicha qolgan. Rassom bu ramziy timsolni har qaysi insonlar bilan solishtirgan. Haqiqatdan ham xuddi shunday. Insonlar ham zabt etish mumkin bo'lgan eng yuqori qirralarni zabt etishiga qaramay u insonligicha qoladi…
                    Asarning o'ziga xosligi, ko'plab olqishlarga sazovor bo'lganligini sababi ham aynan shunda, uning takrorlanmas g'oyasida bo'lgan.
                </p>
           </div>
           
           
            
        </div>
     );
}
 
export default Clown;
