import './WhyChooseUs.css'
import IconList from '../ui/IconList/IconList'

import briefcase from '../../assets/icons/briefcase.svg'
import shield from '../../assets/icons/shield.svg'
import map from '../../assets/icons/map.svg'

const WhyChooseUs = () => {
  const perksList = [
    {
      title: 'Expertise juríridca',
      description:
        'Nossa equipe jurídica altamente especializada domina as complexidades do direito creditório',
      iconPath: briefcase,
    },
    {
      title: 'Proteção Abrangente com Seguros Personalizados',
      description:
        'Oferecemos orientação especializada na escolha de coberturas de seguros adaptadas às suas necessidades específicas',
      iconPath: shield,
    },
    {
      title: 'Orientação Estratégica em Investimentos',
      description:
        'Seja um investidor experiente ou iniciante, nossa consultoria fornece orientação estratégica e análises de mercado atualizadas',
      iconPath: map,
    },
  ]
  return (
    <section>
      <h2 className='fs-h3'>Por que nos escolher?</h2>
      <IconList items={perksList} />
    </section>
  )
}

export default WhyChooseUs
