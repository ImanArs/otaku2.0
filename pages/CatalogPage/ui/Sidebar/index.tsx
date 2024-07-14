import React, { useState, memo } from "react";
import cls from "./styles.module.scss";
import useCategory from "@/hook/UseCategory";
import Checkbox from "../checkbox";
import classNames from "classnames";
import ReactSlider from 'react-slider'
import { useCatalog } from "../../../../components/CatalogPage/model";

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
  codename: string;
}

interface SubCategory {
  id: number;
  name: string;
  codename: string;
}

const Sidebar = ({className}: {className?: string;}) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useCategory();
  
  const {sliderValues, setSliderValues, checkedCategories, handleCheckboxChange, setCheckedCategories} = useCatalog()
  
  return (
    <>
      <button className={classNames([cls.buttonopen, className])} onClick={() => setIsOpen(!isOpen)}>Фильтр</button>

      <aside className={`${cls.sidebar} ${isOpen ? cls.open : ""}`}>
        <div className={cls.sidebar_amountWrapper}>
          <div className={cls.amount}>
            <input type="text" value={sliderValues[0]} readOnly />
            <span>сом</span>
          </div>
          <div className={cls.amount}>
            <input type="text" value={sliderValues[1]} readOnly />
            <span>сом</span>
          </div>
        </div>
        <div className={cls.range}>
        <ReactSlider
          className={cls.slider}
          thumbClassName={cls.thumb}
          trackClassName={cls.truck}
          value={sliderValues}
          renderThumb={(props: any, state: any) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={100}
          max={10000}
          onChange={setSliderValues}
          />
        </div>

        <div className={cls.filter}>
        {categories &&
          categories.map((category: Category) => (
            <div key={category.codename}>
              <Checkbox
                label={category.name}
                className={cls.heading}
                checked={checkedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                />
              {category.subCategories.map((subCategory: SubCategory) => (
                <Checkbox
                  key={subCategory.codename}
                  checked={checkedCategories.includes(subCategory)}
                  label={subCategory.name}
                  className={classNames(cls.subheading, {[cls.red]: checkedCategories.includes(subCategory)}, [])}
                  onChange={() => handleCheckboxChange(subCategory)}
                />
              ))}
            </div>
          ))}
      </div>
        <button type="button" onClick={() => setCheckedCategories([])}>
          сбросить
        </button>
      </aside>
    </>
  );
};

export default memo(Sidebar);