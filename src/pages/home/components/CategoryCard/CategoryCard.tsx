import { CATEGORY_COMPONENT } from '@constants';
import { useEasyNavigate } from '@hooks';

import {
  buttonWrapper,
  categoryIconWrapper,
  categoryTextStyle,
  hashtagTextStyle,
  hashtagTextWrapper,
} from './CategoryCard.css';

import { CategoryType } from '@types';

interface CategoryCardProps {
  category: CategoryType;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const categoryText = CATEGORY_COMPONENT[category].text;
  const hashtagText = CATEGORY_COMPONENT[category].hashtag;
  const categoryIcon = CATEGORY_COMPONENT[category].icon;
  const { goDesignListPage } = useEasyNavigate();

  const handleClickButton = () => {
    goDesignListPage(category);
  };

  return (
    <button className={buttonWrapper} onClick={handleClickButton}>
      <div className={hashtagTextWrapper}>
        {hashtagText.map((tag, index) => (
          <h2 className={hashtagTextStyle} key={index}>
            {tag}
          </h2>
        ))}
      </div>
      <h1 className={categoryTextStyle}>{categoryText}</h1>
      <div className={categoryIconWrapper}>{categoryIcon}</div>
    </button>
  );
};

export default CategoryCard;
