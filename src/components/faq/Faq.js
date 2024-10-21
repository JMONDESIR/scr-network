import React, { useState } from 'react';
import MiniBanner from '../miniBanner/MiniBanner';
import './Faq.css'
import DynamicTextbox from '../dynamicTextbox/DynamicTextbox';

const Faq = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
    <MiniBanner title="f a q"/>
      <select onChange={handleSelect}>
        <option value="">Select an Question</option>
        <option value="option1">Do I have a Virus?</option>
        <option value="option2">What is a Virus?</option>
        <option value="option3">What is Malware?</option>
        <option value="option4">What is a Rootkit?</option>
        <option value="option5">What are Exploits?</option>
        <option value="option6">What's the hype about?</option>

      </select>

      {selectedItem === 'option1' && (
        <DynamicTextbox text={`Are you overwhelmed by pop-up ads, new browser toolbars, a changed homepage, or excessive spam?
            Is your computer running slow or unable to access the internet? If so, your PC is likely infected 
            with adware, spyware, viruses, or other malware. With over 160,000 viruses identified and new ones 
            emerging daily, according to the International Computer Security Association, the threat of viruses 
            is not going away anytime soon.`} />
      )}

      {selectedItem === 'option2' && (
        <DynamicTextbox text={`A computer virus is a self-replicating program that can spread quickly and is often difficult to remove. 
            Like biological viruses, they can attach to nearly any file and spread as those files are shared. Some 
            viruses damage files, reformat hard drives, or cause other harm, while others simply consume memory and 
            storage, degrading computer performance. Previously, viruses spread mainly through floppy disks, but the 
            internet and email have accelerated their distribution, enabling viruses to infect systems within minutes. 
            This rapid spread costs businesses millions in lost productivity and virus removal each year.`}/>
      )}

      {selectedItem === 'option3' && (
        <DynamicTextbox text={`Malware, short for malicious software, includes harmful programs like viruses and trojans. 
         Spyware, a type of Adware, secretly monitors your internet activity and sends data back to the host computer. 
         Often bundled with free downloads, it works without user knowledge to create marketing profiles based on browsing 
         habits. Despite claims of anonymity from companies, Spyware continuously transmits tracking data, effectively 
         turning your PC into a "live" server that reports your activity to a remote location.`} />

      )}

      {selectedItem === 'option4' && (
        <DynamicTextbox text={`A rootkit is one of the most difficult viruses to detect, as it hides within a computer's core processes, 
            often requiring a complete hard drive wipe and operating system reinstallation to remove. Dialers, 
            on the other hand, can be costly; black hat hackers use them to dial expensive international numbers or 
            to transmit stolen data.`} />
      )}

      {selectedItem === 'option5' && (
        <DynamicTextbox text={`Exploits are vulnerabilities that keep Microsoft and Bill Gates on alert, as hackers seek flaws in 
            Windows to bypass security and gain access to your computer. Service Pack 2, for example, was a patch 
            designed to fix such a flaw. Spyware, despite its name, is not illegal, but privacy-conscious users may 
            object to its data tracking and transmission activities. While these tools are legal in most places, if 
            misused, they can severely compromise user privacy, similar to how a tape recorder can be abused.`} />
      )}

      {selectedItem === 'option6' && (
        <DynamicTextbox text={`While legitimate adware companies disclose the type of data they collect in their privacy statements, 
            users have little control over what is actually transmitted. The technology is capable of sending more 
            than just advertising statistics, which makes many users uncomfortable. Few people take the time 
            to read privacy statements, and millions use ad-supported "spyware" products without concern. In fact, 
            some of these programs are among the most popular downloads on the internet. Spyware is often bundled 
            with free software and games, and PC surveillance tools—such as keyloggers, keystroke capture, and 
            email monitoring—are designed for legitimate uses but can easily be abused if installed without a user's knowledge.`} />
      )}
    </div>
  );
};

export default Faq;
