import React from 'react';
import Link from 'next/link';
import StyledBreadcrumb from './styled-breadcrumbs';

const Breadcrumbs = ({ t, article, isCategory, category }) => {
    const pathnames = article?.attributes.url.split('/').filter((x) => x);
    return (
        <StyledBreadcrumb>
            <Link href="/" className='breadcrumb-links'>
                {t("Home")}
            </Link>
            {isCategory ? (
                <React.Fragment>
                    <Link href={category.url} className='breadcrumb-links last'>
                        {category.name}
                    </Link>
                </React.Fragment>
            ) : (
                pathnames?.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <React.Fragment key={name}>
                            {isLast ? (
                                <span className='breadcrumb-links last'>{article.attributes.title}</span>
                            ) : (
                                <Link href={routeTo} className='breadcrumb-links'>
                                    {article.attributes.category.data.attributes.name}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })
            )}
        </StyledBreadcrumb>
    );
};

export default Breadcrumbs;